/* tslint:disable */
/* eslint-disable */




export const BiddingMarketType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_4: 4
} as const;

export type BiddingMarketType = typeof BiddingMarketType[keyof typeof BiddingMarketType];



