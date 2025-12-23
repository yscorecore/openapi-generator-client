/* tslint:disable */
/* eslint-disable */




export const MainSupplierStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_MINUS_1: -1
} as const;

export type MainSupplierStatus = typeof MainSupplierStatus[keyof typeof MainSupplierStatus];



