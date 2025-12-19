/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockOutInfo3 } from './stock-out-info3';

export interface StockOutFromStockInAddReq3 {
    'receiveUser': string;
    'reviewer'?: string | null;
    'items'?: Array<StockOutInfo3> | null;
    'fromStockIn'?: boolean;
}

