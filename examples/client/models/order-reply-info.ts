/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderReplyItemInfo } from './order-reply-item-info';
// May contain unused imports in some cases
// @ts-ignore
import type { SupplyInfo } from './supply-info';

export interface OrderReplyInfo {
    'createTime'?: string;
    'id'?: string;
    'supplies'?: SupplyInfo;
    'suppliesId'?: string;
    'orderPlanId'?: string;
    'orderReplyItems'?: Array<OrderReplyItemInfo> | null;
}

