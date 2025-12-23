/* tslint:disable */
/* eslint-disable */




export const SchoolImageType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;

export type SchoolImageType = typeof SchoolImageType[keyof typeof SchoolImageType];



