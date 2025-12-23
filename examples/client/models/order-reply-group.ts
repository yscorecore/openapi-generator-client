/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderDto } from './order-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderReplyDto } from './order-reply-dto';

export interface OrderReplyGroup {
    'orderReplies'?: Array<OrderReplyDto> | null;
    'orders'?: Array<OrderDto> | null;
    'supplierId'?: string;
    'supplierName'?: string | null;
    'supplierUserName'?: string | null;
    'materialCount'?: number;
    'lastReplyTime'?: string;
}

