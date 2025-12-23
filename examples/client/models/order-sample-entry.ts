/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderSampleTemplate } from './order-sample-template';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface OrderSampleEntry {
    'supplierName'?: string | null;
    'stockCode'?: string | null;
    'items'?: Array<OrderSampleTemplate> | null;
    'orderSource'?: OrderSource;
    'orderType'?: OrderType;
}



