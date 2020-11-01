// сущности для симуляции GET запроса

import { ColumnType } from "../types/types";

const DBColumns = [
    {
        name: "ToDo",
        cards: [
            {
                id: 1,
                label: "Задача 1",
                text: "Выполнить задачу 1",
                priority: 2,
                createDate: new Date("2020-10-30 07:45:00")
            },

            {
                id: 2,
                label: "Задача 2",
                text: "Выполнить задачу 2",
                priority: 1,
                createDate: new Date("2020-10-30 08:45:00")
            }
        ]
    },
    {
        name: "InProgress",
        cards: [
            {
                id: 3,
                label: "Задача 3",
                text: "Выполнить задачу 3",
                priority: 1,
                createDate: new Date("2020-11-01 07:45:00")
            },

            {
                id: 4,
                label: "Задача 4",
                text: "Выполнить задачу 4",
                priority: 2,
                createDate: new Date("2020-10-29 10:45:00")
            },

            {
                id: 5,
                label: "Задача 5",
                text: "Выполнить задачу 5",
                priority: 2,
                createDate: new Date("2020-10-30 11:45:00")
            }
        ]
    },
    {
        name: "Done",
        cards: [
            {
                id: 6,
                label: "Задача 6",
                text: "Выполнить задачу 6",
                priority: 1,
                createDate: new Date("2020-11-30 11:50:00")
            },

            {
                id: 7,
                label: "Задача 7",
                text: "Выполнить задачу 7",
                priority: 1,
                createDate: new Date("2020-11-30 11:55:00")
            },

            {
                id: 8,
                label: "Задача 8",
                text: "Выполнить задачу 8",
                priority: 2,
                createDate: new Date("2020-10-30 11:50:00")
            }
        ]
    }
] as Array<ColumnType>;

export default DBColumns;