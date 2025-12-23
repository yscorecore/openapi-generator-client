/* tslint:disable */
/* eslint-disable */




export const MealDateType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_MINUS_1: -1
} as const;

export type MealDateType = typeof MealDateType[keyof typeof MealDateType];



