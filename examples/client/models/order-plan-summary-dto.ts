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
import type { OrderPlanItemDto } from './order-plan-item-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanStatus } from './order-plan-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderReplyGroup } from './order-reply-group';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface OrderPlanSummaryDto {
    'id'?: string;
    'createUser'?: string | null;
    'createTime'?: string;
    'orderCode'?: string | null;
    'orderSchoolUser'?: string | null;
    'orderSchoolUserOpenId'?: string | null;
    'status'?: OrderPlanStatus;
    'orderType'?: OrderType;
    'category'?: OrderCategory;
    'channel'?: OrderChannel;
    'menuDate'?: string | null;
    'dinnerCounts'?: { [key: string]: number; } | null;
    'latestDeliveryTime'?: string;
    'biddingDeadline'?: string;
    'isPublicShow'?: boolean;
    'orderPlanItems'?: Array<OrderPlanItemDto> | null;
    'replyGroups'?: Array<OrderReplyGroup> | null;
}



