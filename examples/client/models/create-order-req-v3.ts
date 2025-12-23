/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemReq } from './order-item-req';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface CreateOrderReqV3 {
    'supplierId'?: string | null;
    'orderType'?: OrderType;
    'orderSource'?: OrderSource;
    'orderItems'?: Array<OrderItemReq> | null;
}



