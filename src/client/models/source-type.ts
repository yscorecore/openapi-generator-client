/* tslint:disable */
/* eslint-disable */




export const SourceType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;

export type SourceType = typeof SourceType[keyof typeof SourceType];



