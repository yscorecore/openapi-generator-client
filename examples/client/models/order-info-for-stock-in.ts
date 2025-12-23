/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderChannel } from './order-channel';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemInfoForStockIn } from './order-item-info-for-stock-in';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderStatus } from './order-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface OrderInfoForStockIn {
    'orderId'?: string;
    'supplierName'?: string | null;
    'orderCode'?: string | null;
    'orderType'?: OrderType;
    'orderSource'?: OrderSource;
    'createTime'?: string;
    'deliveryTime'?: string | null;
    'materialTypeName'?: string | null;
    'orderPlanChannel'?: OrderChannel;
    'orderPlanCreateTime'?: string | null;
    'orderPlanDeliveryTime'?: string | null;
    'orderPlanCode'?: string | null;
    'dinnerCounts'?: number | null;
    'orderPlanDinnerCounts'?: { [key: string]: number; } | null;
    'items'?: Array<OrderItemInfoForStockIn> | null;
    'orderPlanSchoolUser'?: string | null;
    'orderPlanMaterialTypeName'?: string | null;
    'status'?: OrderStatus;
}



