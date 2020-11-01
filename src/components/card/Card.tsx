import React, { useState } from "react";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField, Tooltip } from "@material-ui/core";
import CommentIcon from '@material-ui/icons/Comment';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { CardType } from "../../types/types";
import { useDispatch } from "react-redux";
import { addCardToColumn, changeCardPriority, changeCardText, removeCardFromColumn } from "../../redux/reducers/appReducer";

interface CardProps {
    columnName: string,
    card: CardType
};

const Card: React.FC<CardProps> = ({ columnName, card }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const newColumn = columnName === "Сделать" ? "В работе" : "Готово";

    const changeColumn = () => {
        dispatch(removeCardFromColumn(card.id, columnName));
        if (columnName !== "Готово") {
            dispatch(addCardToColumn(card, `${newColumn}`))
        }
    };

    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCardText(columnName, card.id, event.target.value))
    };

    const changePriority = () => {
        const newPriority = card.priority === 1 ? 2 : 1;
        dispatch(changeCardPriority(columnName, card.id, newPriority))
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ListItem>
                <ListItemIcon>
                    <Checkbox onClick={changeColumn} checked={columnName === "Готово"} color="primary" edge="start" tabIndex={-1} />
                </ListItemIcon>
                <ListItemText id={card.id.toString()} primary={card.label} secondary={card.createDate.toLocaleString("ru", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                })} />
                <ListItemSecondaryAction>
                    <Tooltip title={card.priority === 1 ? "Приоритет: высокий" : "Приоритет: средний"}>
                        <IconButton onClick={changePriority}>
                            <PriorityHighIcon color={card.priority === 1 ? "secondary" : "primary"} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Комментарий">
                        <IconButton onClick={handleOpen}>
                            <CommentIcon edgeMode="end" aria-label="comments" />
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            </ListItem>
            <Dialog open={open}>
                <DialogTitle>{card.label}</DialogTitle>
                <DialogContent>
                    <TextField onChange={changeText} variant="outlined" multiline={true} rowsMax={5} value={card.text} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        ЗАКРЫТЬ
                    </Button>
                </DialogActions>
            </Dialog>
            <Divider />
        </>
    );
};

export default Card;