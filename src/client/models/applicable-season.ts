/* tslint:disable */
/* eslint-disable */




export const ApplicableSeason = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;

export type ApplicableSeason = typeof ApplicableSeason[keyof typeof ApplicableSeason];



