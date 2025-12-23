/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderChannel } from './order-channel';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemInfo } from './order-item-info';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderStatus } from './order-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';
// May contain unused imports in some cases
// @ts-ignore
import type { SupplierUserInfo } from './supplier-user-info';
// May contain unused imports in some cases
// @ts-ignore
import type { SupplyInfo } from './supply-info';

export interface ConfirmedOrderInfo {
    'createTime'?: string;
    'id'?: string;
    'orderCode'?: string | null;
    'orderSchoolUser'?: string | null;
    'orderPlanId'?: string | null;
    'orderReplyId'?: string | null;
    'orderPlanChannel'?: OrderChannel;
    'orderPlanDinnerCounts'?: { [key: string]: number; } | null;
    'status'?: OrderStatus;
    'supply'?: SupplyInfo;
    'supplierUser'?: SupplierUserInfo;
    'supplyId'?: string | null;
    'orderItems'?: Array<OrderItemInfo> | null;
    'orderSource'?: OrderSource;
    'orderType'?: OrderType;
    'remark'?: string | null;
    'delivered'?: boolean;
    'beforeStockImages'?: Array<string> | null;
    'latestDeliveryTime'?: string | null;
    'materialType'?: number | null;
    'materialTypeName'?: string | null;
    'totalPrice'?: number;
}



