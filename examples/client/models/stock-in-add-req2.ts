/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemAddReq } from './stock-in-item-add-req';

export interface StockInAddReq2 {
    'date'?: string;
    'orderId'?: string;
    'items'?: Array<StockInItemAddReq> | null;
    'reviewer'?: string | null;
    'buyer'?: string | null;
}

