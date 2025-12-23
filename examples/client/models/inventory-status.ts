/* tslint:disable */
/* eslint-disable */




export const InventoryStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_8: 8,
    NUMBER_9: 9
} as const;

export type InventoryStatus = typeof InventoryStatus[keyof typeof InventoryStatus];



