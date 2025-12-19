/* tslint:disable */
/* eslint-disable */




export const MealMode = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type MealMode = typeof MealMode[keyof typeof MealMode];



