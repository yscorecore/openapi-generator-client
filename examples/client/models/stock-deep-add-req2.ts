/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockDeepItemReq } from './stock-deep-item-req';

export interface StockDeepAddReq2 {
    'materialSpecId'?: string;
    'deepItems': Array<StockDeepItemReq>;
    'receiveUser': string;
    'reviewer'?: string | null;
}

