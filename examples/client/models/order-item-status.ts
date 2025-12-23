/* tslint:disable */
/* eslint-disable */




export const OrderItemStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;

export type OrderItemStatus = typeof OrderItemStatus[keyof typeof OrderItemStatus];



