/* tslint:disable */
/* eslint-disable */




export const PurchaseKind = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type PurchaseKind = typeof PurchaseKind[keyof typeof PurchaseKind];



