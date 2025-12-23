/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MaterialSpecInfo1 } from './material-spec-info1';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderPlanStatus } from './order-plan-status';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderReplyItemInfo1 } from './order-reply-item-info1';

export interface OrderPlanItemWithReplyInfo {
    'createTime'?: string;
    'id'?: string;
    'orderPlanId'?: string;
    'requirement'?: number;
    'remarks'?: string | null;
    'brand'?: string | null;
    'materialSpecId'?: string;
    'materialSpec'?: MaterialSpecInfo1;
    'status'?: OrderPlanStatus;
    'replyItems'?: Array<OrderReplyItemInfo1> | null;
}



