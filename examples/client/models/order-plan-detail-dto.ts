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
import type { OrderPlanItemDetailDto } from './order-plan-item-detail-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanStatus } from './order-plan-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface OrderPlanDetailDto {
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
    'hasConfirm'?: boolean;
    'lastConfirmTime'?: string | null;
    'hasCompleted'?: boolean;
    'lastCompleteTime'?: string | null;
    'stockInMaterialCount'?: number;
    'hasReply'?: boolean;
    'lastReplyTime'?: string | null;
    'replyMaterialCount'?: number;
    'confirmedMaterialCount'?: number;
    'items'?: Array<OrderPlanItemDetailDto> | null;
}



