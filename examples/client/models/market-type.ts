/* tslint:disable */
/* eslint-disable */




export const MarketType = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type MarketType = typeof MarketType[keyof typeof MarketType];



