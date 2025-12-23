/* tslint:disable */
/* eslint-disable */




export const GoodsStatus = {
    NUMBER_1: 1,
    NUMBER_MINUS_1: -1
} as const;

export type GoodsStatus = typeof GoodsStatus[keyof typeof GoodsStatus];



