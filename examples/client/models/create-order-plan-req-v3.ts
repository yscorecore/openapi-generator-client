/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemForCreateOrder } from './order-item-for-create-order';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface CreateOrderPlanReqV3 {
    'id'?: string;
    'orderType'?: OrderType;
    'latestDeliveryTime'?: string;
    'biddingDeadline'?: string;
    'orderItems'?: Array<OrderItemForCreateOrder> | null;
}



