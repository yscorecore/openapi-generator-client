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
// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemCodes } from './stock-in-item-codes';

export interface StockInForReturnDto {
    'id'?: string;
    'orderId'?: string;
    'stockCode'?: string | null;
    'supplierName'?: string | null;
    'orderSource'?: OrderSource;
    'orderType'?: OrderType;
    'orderChannel'?: OrderChannel;
    'orderMaterialType'?: number | null;
    'orderMaterialTypeName'?: string | null;
    'createTime'?: string;
    'date'?: string;
    'stockInItems'?: Array<StockInItemCodes> | null;
}



