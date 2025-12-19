/* tslint:disable */
/* eslint-disable */




export const DiscountBiddingStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_MINUS_1: -1
} as const;

export type DiscountBiddingStatus = typeof DiscountBiddingStatus[keyof typeof DiscountBiddingStatus];



