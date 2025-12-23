/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DeepProcessingStatus } from './deep-processing-status';
// May contain unused imports in some cases
// @ts-ignore
import type { NewOrderItemInfo } from './new-order-item-info';
// May contain unused imports in some cases
// @ts-ignore
import type { NewStockInItemInfo } from './new-stock-in-item-info';

export interface DeepItemInfo {
    'deepProcessingStatus'?: DeepProcessingStatus;
    'deepProcessingOrderId'?: string;
    'deepProcessingId'?: string;
    'stockInItemId'?: string;
    'stockInItemCode'?: string | null;
    'stockInItemGoodsName'?: string | null;
    'goodsPrice'?: number;
    'goodsAmount'?: number;
    'totalPrice'?: number;
    'newOrderItem'?: NewOrderItemInfo;
    'newStockInItem'?: NewStockInItemInfo;
}



