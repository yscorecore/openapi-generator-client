/* tslint:disable */
/* eslint-disable */




export const OrderPlanStatus = {
    NUMBER_1: 1,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9
} as const;

export type OrderPlanStatus = typeof OrderPlanStatus[keyof typeof OrderPlanStatus];



