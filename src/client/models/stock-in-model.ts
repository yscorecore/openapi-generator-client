/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderChannel } from './order-channel';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface StockInModel {
    'id'?: string;
    'date'?: string;
    'stockCode'?: string | null;
    'supplierName'?: string | null;
    'orderOrderSource'?: OrderSource;
    'orderOrderPlanChannel'?: OrderChannel;
    'orderOrderType'?: OrderType;
    'orderUser'?: string | null;
    'operatorName'?: string | null;
    'totalPrice'?: number;
    'isCompleted'?: boolean;
    'beforeStockImages'?: Array<string> | null;
    'afterStockImages'?: Array<string> | null;
}



