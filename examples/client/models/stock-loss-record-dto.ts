/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DinnerOutDto1 } from './dinner-out-dto1';

export interface StockLossRecordDto {
    'amount'?: number;
    'goodsPrice'?: number;
    'totalPrice'?: number;
    'stockOutItemId'?: string | null;
    'diningOutId'?: string;
    'diningOut'?: DinnerOutDto1;
    'isZero'?: boolean;
}

