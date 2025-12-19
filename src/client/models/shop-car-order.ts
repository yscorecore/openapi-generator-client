/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface ShopCarOrder {
    'remark'?: string | null;
    'batchNo'?: string | null;
    'shopCarIds'?: Array<string> | null;
    'latestDeliveryTime': string;
    'orderType': OrderType;
}



