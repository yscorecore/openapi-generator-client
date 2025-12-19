/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockReturnItemReq } from './stock-return-item-req';

export interface StockReturnAddBySoftReq {
    'stockInId'?: string;
    'items': Array<StockReturnItemReq>;
    'reviewer'?: string | null;
}

