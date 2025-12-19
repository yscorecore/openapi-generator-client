/* tslint:disable */
/* eslint-disable */




export const MealKind = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_5: 5,
    NUMBER_15: 15,
    NUMBER_25: 25
} as const;

export type MealKind = typeof MealKind[keyof typeof MealKind];



