/* tslint:disable */
/* eslint-disable */




export const ShareType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;

export type ShareType = typeof ShareType[keyof typeof ShareType];



