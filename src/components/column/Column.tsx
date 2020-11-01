import { createStyles, Divider, IconButton, List, makeStyles, Paper, Theme, Toolbar, Tooltip, Typography } from "@material-ui/core";
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import DateRangeIcon from '@material-ui/icons/DateRange';
import React, { useEffect } from "react";
import { CardType } from "../../types/types";
import Card from "../card/Card";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        column: {
            width: "100%",
            padding: 0,
            backgroundColor: theme.palette.background.paper,
        },
        sortPanel: {
            display: "flex",
            justifyContent: "space-between"
        },
        header: {
            backgroundColor: theme.palette.primary.light
        }
    }),
);

interface ColumnProps {
    columnName: string,
    cards: Array<CardType>
};

const Column: React.FC<ColumnProps> = ({ columnName, cards }) => {
    const classes = useStyles();
    const [chosenArray, setChosenArray] = React.useState<Array<CardType>>([...cards]);
    const [priorityToggle, setPriorityToggle] = React.useState(false);
    const [dateToggle, setDateToggle] = React.useState(false);

    const prioritySort = () => {
        priorityToggle
            ? setChosenArray([...cards.sort((a, b) => a.priority > b.priority ? 1 : -1)].reverse())
            : setChosenArray([...cards.sort((a, b) => a.priority > b.priority ? 1 : -1)])
    };

    const dateSort = () => {
        dateToggle
            ? setChosenArray([...cards.sort((a, b) => a.createDate > b.createDate ? 1 : -1)].reverse())
            : setChosenArray([...cards.sort((a, b) => a.createDate > b.createDate ? 1 : -1)])
    };

    useEffect(() => {
        if (cards.length) {
            setChosenArray([...cards]);
        }
    }, [cards]);

    return (
        <Paper elevation={3}>
            <Paper className={classes.header}>
                <Typography variant="h6">{`${columnName}`}</Typography>
            </Paper>
            <Divider />
            <Paper>
                <Toolbar className={classes.sortPanel}>
                    <Typography align="left">
                        Сортировать по:
                        </Typography>
                    <div>
                        <Tooltip title={"приоритету"}>
                            <IconButton onClick={() => { setPriorityToggle(!priorityToggle); prioritySort() }}>
                                <LowPriorityIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"дате создания"}>
                            <IconButton onClick={() => { setDateToggle(!dateToggle); dateSort() }}>
                                <DateRangeIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </Paper>
            <Divider />
            <List className={classes.column}>
                {chosenArray.length
                    ? chosenArray.map((card) => { return <Card columnName={columnName} card={card} key={card.id} /> })
                    : null}
            </List>
        </Paper>
    )
};

export default Column;