/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ConfirmReplyItemInfo } from './confirm-reply-item-info';

export interface ConfirmReplyInfo {
    'latestReplyTime'?: string;
    'orderPlanId'?: string;
    'confirmedReplyItems'?: Array<ConfirmReplyItemInfo> | null;
    'keepRemainingPurchasedItems'?: boolean;
    'latestDeliveryTime'?: string | null;
}

