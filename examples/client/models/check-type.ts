/* tslint:disable */
/* eslint-disable */




export const CheckType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;

export type CheckType = typeof CheckType[keyof typeof CheckType];



