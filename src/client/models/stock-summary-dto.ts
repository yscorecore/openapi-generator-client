/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface StockSummaryDto {
    'stockInId'?: string;
    'stockCode'?: string | null;
    'orderSource'?: OrderSource;
    'isCompleted'?: boolean;
    'totalPrice'?: number;
    'changePrice'?: number;
    'itemCount'?: number;
    'materialCount'?: number;
    'restAmount'?: number;
    'createTime'?: string;
    'supplierName'?: string | null;
    'orderType'?: OrderType;
    'date'?: string;
}



