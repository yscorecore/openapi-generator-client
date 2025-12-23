/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanItemWithReplyInfo } from './order-plan-item-with-reply-info';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderReplyInfo1 } from './order-reply-info1';

export interface ConfirmDetails {
    'fromRequirement'?: boolean;
    'latestReplyTime'?: string;
    'overallQuotation'?: boolean;
    'replies'?: Array<OrderReplyInfo1> | null;
    'repliedItems'?: Array<OrderPlanItemWithReplyInfo> | null;
    'nonRepliedItems'?: Array<OrderPlanItemWithReplyInfo> | null;
}

