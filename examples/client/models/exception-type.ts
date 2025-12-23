/* tslint:disable */
/* eslint-disable */




export const ExceptionType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;

export type ExceptionType = typeof ExceptionType[keyof typeof ExceptionType];



