/* tslint:disable */
/* eslint-disable */




export const MealType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5
} as const;

export type MealType = typeof MealType[keyof typeof MealType];



