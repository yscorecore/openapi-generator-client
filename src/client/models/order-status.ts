/* tslint:disable */
/* eslint-disable */




export const OrderStatus = {
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7
} as const;

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];



