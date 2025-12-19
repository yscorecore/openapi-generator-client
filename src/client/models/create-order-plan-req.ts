/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemForCreateOrder } from './order-item-for-create-order';

export interface CreateOrderPlanReq {
    'id'?: string;
    'isNutritious'?: boolean;
    'latestDeliveryTime'?: string;
    'biddingDeadline'?: string;
    'orderItems'?: Array<OrderItemForCreateOrder> | null;
}

