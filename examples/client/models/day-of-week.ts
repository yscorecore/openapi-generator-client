/* tslint:disable */
/* eslint-disable */




export const DayOfWeek = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6
} as const;

export type DayOfWeek = typeof DayOfWeek[keyof typeof DayOfWeek];



