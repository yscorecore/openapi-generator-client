/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockOutInfo } from './stock-out-info';

export interface StockOutFromStockInAddReq2 {
    'receiveUser': string;
    'reviewer'?: string | null;
    'items'?: Array<StockOutInfo> | null;
}

