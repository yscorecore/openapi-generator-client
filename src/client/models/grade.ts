/* tslint:disable */
/* eslint-disable */




export const Grade = {
    NUMBER_1: 1,
    NUMBER_4: 4,
    NUMBER_7: 7
} as const;

export type Grade = typeof Grade[keyof typeof Grade];



