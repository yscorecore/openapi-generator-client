/* tslint:disable */
/* eslint-disable */




export const CanteenType = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type CanteenType = typeof CanteenType[keyof typeof CanteenType];



