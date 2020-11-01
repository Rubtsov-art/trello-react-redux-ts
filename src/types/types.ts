export type ColumnType = {
    name: string,
    cards: Array<CardType> | []
};

export type CardType = {
    id: number,
    label: string,
    text: string,
    priority: number,
    createDate: Date
};