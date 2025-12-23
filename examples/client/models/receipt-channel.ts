/* tslint:disable */
/* eslint-disable */




export const ReceiptChannel = {
    NUMBER_1: 1,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_11: 11,
    NUMBER_100: 100,
    NUMBER_200: 200
} as const;

export type ReceiptChannel = typeof ReceiptChannel[keyof typeof ReceiptChannel];



