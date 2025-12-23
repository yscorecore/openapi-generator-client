/* tslint:disable */
/* eslint-disable */




export const StockReviewKind = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_4: 4,
    NUMBER_8: 8
} as const;

export type StockReviewKind = typeof StockReviewKind[keyof typeof StockReviewKind];



