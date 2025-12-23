/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderCategory } from './order-category';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderChannel } from './order-channel';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanItemInfo } from './order-plan-item-info';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanStatus } from './order-plan-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderReplyInfo } from './order-reply-info';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface NewOrderPlanInfo {
    'createTime'?: string;
    'id'?: string;
    'orderCode'?: string | null;
    'orderSchoolUser'?: string | null;
    'orderPlanItems'?: Array<OrderPlanItemInfo> | null;
    'orderReplies'?: Array<OrderReplyInfo> | null;
    'latestOrderReplyTime'?: string;
    'status'?: OrderPlanStatus;
    'orderType'?: OrderType;
    'category'?: OrderCategory;
    'channel'?: OrderChannel;
    'menuDate'?: string | null;
    'dinnerCounts'?: { [key: string]: number; } | null;
    'schoolName'?: string | null;
    'latestDeliveryTime'?: string;
    'biddingDeadline'?: string;
    'mustReplyAllItems'?: boolean;
    'materialType'?: number | null;
    'materialTypeName'?: string | null;
    'fromRequirement'?: boolean;
}



