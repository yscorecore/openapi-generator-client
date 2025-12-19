/* tslint:disable */
/* eslint-disable */




export const PaymentType = {
    NUMBER_1: 1,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_100: 100
} as const;

export type PaymentType = typeof PaymentType[keyof typeof PaymentType];



