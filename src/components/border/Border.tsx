import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { ColumnType } from "../../types/types";
import Column from "../column/Column";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        border: {
            width: "100%",
            margin: 0
        }
    }),
);

interface BorderProps {
    columns: Array<ColumnType>
};

const Border: React.FC<BorderProps> = ({ columns }) => {
    const classes = useStyles();

    return (<Grid className={classes.border} container spacing={2}>
        { columns.length ? columns.map((column, i) => {
            return (
                <Grid key={i} item xs={12} md={4}>
                    <Column columnName={column.name} cards={column.cards} />
                </Grid>
            )
        }) : null}
    </Grid>)
};

export default Border;