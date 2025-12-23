/* tslint:disable */
/* eslint-disable */




export const PriceState = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type PriceState = typeof PriceState[keyof typeof PriceState];



