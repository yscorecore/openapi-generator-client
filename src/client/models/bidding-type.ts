/* tslint:disable */
/* eslint-disable */




export const BiddingType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;

export type BiddingType = typeof BiddingType[keyof typeof BiddingType];



