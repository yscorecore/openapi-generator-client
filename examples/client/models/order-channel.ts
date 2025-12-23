/* tslint:disable */
/* eslint-disable */




export const OrderChannel = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;

export type OrderChannel = typeof OrderChannel[keyof typeof OrderChannel];



