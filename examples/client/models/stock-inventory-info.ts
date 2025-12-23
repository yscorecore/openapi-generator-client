/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { InventoryStatus } from './inventory-status';

export interface StockInventoryInfo {
    'id'?: string;
    'stockInItemCode'?: string | null;
    'goodsName'?: string | null;
    'goodsAmount'?: number;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'brand'?: string | null;
    'stockOutAmount'?: number;
    'stockReturnAmount'?: number;
    'deepProcessingAmount'?: number;
    'restPercent'?: number;
    'restAmount'?: number;
    'inventoryStatus'?: InventoryStatus;
}



