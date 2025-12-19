/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ShareType } from './share-type';

export interface OrderPlanCreatedRes {
    'id'?: string;
    'orderCode'?: string | null;
    'latestDeliveryTime'?: string;
    'biddingDeadline'?: string;
    'isPublicShow'?: boolean;
    'mustReplyAllItems'?: boolean;
    'materialType'?: number | null;
    'materialTypeName'?: string | null;
    'postDiscount'?: number | null;
    'forceCertifiedSupplier'?: boolean;
    'shareType'?: ShareType;
}



