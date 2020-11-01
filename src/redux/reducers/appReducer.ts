import { appStateType } from './../store';
import { ColumnType, CardType } from './../../types/types';
import { ThunkAction } from "redux-thunk";
import gettingColumns from "../../network/cardsEntitys";

const ADD_CARD_TO_COLUMN = "ADD_CARD_TO_COLUMN";
const REMOVE_CARD_FROM_COLUMN = "REMOVE_CARD_FROM_COLUMN";
const CREATE_COLUMNS = "CREATE_COLUMNS";
const CHANGE_CARD_TEXT = "CHANGE_CARD_TEXT";
const CHANGE_PRIORITY = "CHANGE_PRIORITY";

const initialState = {
    columns: [
        {
            name: "ToDo" as String,
            cards: [] as [] | Array<CardType>
        } as ColumnType,

        {
            name: "InProgress" as String,
            cards: [] as [] | Array<CardType>
        } as ColumnType,

        {
            name: "Done" as String,
            cards: [] as [] | Array<CardType>
        } as ColumnType
    ] as Array<ColumnType>
};

const appReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case CREATE_COLUMNS: {
            return ({
                ...state, columns: [...action.payload.columns]
            });
        };

        case ADD_CARD_TO_COLUMN: {
            return ({
                ...state, columns: [...state.columns.map((column) => {
                    if (column.name === action.payload.newColumn) {
                        return { ...column, cards: [...column.cards, action.payload.card] };
                    } else return { ...column };
                })]
            });
        };

        case REMOVE_CARD_FROM_COLUMN: {
            return ({
                ...state, columns: [...state.columns.map((column) => {
                    if (column.name === action.payload.prevColumn) {
                        return { ...column, cards: [...column.cards.filter((card: CardType) => card.id !== action.payload.cardId)] }
                    } else return { ...column };
                })]
            });
        };

        case CHANGE_CARD_TEXT: {
            return ({
                ...state, columns: [...state.columns.map((column) => {
                    if (column.name === action.payload.columnName) {
                        return {
                            ...column, cards: (column.cards as Array<CardType>).map((card: CardType) => {
                                if (card.id === action.payload.cardId) {
                                    return { ...card, text: action.payload.text }
                                } else return { ...card };
                            })
                        }

                    } else return { ...column };
                })]
            });
        };

        case CHANGE_PRIORITY: {
            return ({
                ...state, columns: [...state.columns.map((column) => {
                    if (column.name === action.payload.columnName) {
                        return {
                            ...column, cards: (column.cards as Array<CardType>).map((card: CardType) => {
                                if (card.id === action.payload.cardId) {
                                    return { ...card, priority: action.payload.priority }
                                } else return { ...card };
                            })
                        }

                    } else return { ...column };
                })]
            });
        };

        default: return state;
    }
};

type ActionsType = AddCardToColumnType | RemoveCardFromColumnType | CreateColumnsType | changeCardTextType | changeCardPriorityType;

// Логика перемещения карточки в другую колонку

type AddCardToColumnType = {
    type: typeof ADD_CARD_TO_COLUMN,
    payload: {
        card: CardType,
        newColumn: string
    }
};

export const addCardToColumn = (card: CardType, newColumn: string): AddCardToColumnType => {
    return ({ type: ADD_CARD_TO_COLUMN, payload: { card, newColumn } });
};

type RemoveCardFromColumnType = {
    type: typeof REMOVE_CARD_FROM_COLUMN,
    payload: {
        cardId: number,
        prevColumn: string
    }
};

export const removeCardFromColumn = (cardId: number, prevColumn: string): RemoveCardFromColumnType => {
    return ({ type: REMOVE_CARD_FROM_COLUMN, payload: { cardId, prevColumn } });
};

// Логика с эмулцией асинхронного получения данных (массив колонок)

type CreateColumnsType = {
    type: typeof CREATE_COLUMNS,
    payload: {
        columns: Array<ColumnType>
    }
};

const createColumns = (columns: Array<ColumnType>): CreateColumnsType => {
    return ({ type: CREATE_COLUMNS, payload: { columns } })
};

type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, ActionsType>

export const getColumns = (): ThunkType => {
    return async (dispatch) => {
        const columns = gettingColumns;
        dispatch(createColumns(columns));
    };
};

// Логика изменения текста карточки

type changeCardTextType = {
    type: typeof CHANGE_CARD_TEXT,
    payload: {
        columnName: string,
        cardId: number,
        text: string
    }
};

export const changeCardText = (columnName: string, cardId: number, text: string): changeCardTextType => {
    return ({ type: CHANGE_CARD_TEXT, payload: { columnName, cardId, text } });
};

// Логика изменения приоритета карточки

type changeCardPriorityType = {
    type: typeof CHANGE_PRIORITY,
    payload: {
        columnName: string,
        cardId: number,
        priority: number
    }
};

export const changeCardPriority = (columnName: string, cardId: number, priority: number): changeCardPriorityType => {
    return ({ type: CHANGE_PRIORITY, payload: { columnName, cardId, priority } });
};


export default appReducer;