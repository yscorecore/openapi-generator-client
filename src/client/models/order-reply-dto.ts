/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderReplyItemDto } from './order-reply-item-dto';

export interface OrderReplyDto {
    'id'?: string;
    'createUser'?: string | null;
    'createTime'?: string;
    'suppliesId'?: string;
    'suppliesName'?: string | null;
    'supplierUserName'?: string | null;
    'orderReplyItems'?: Array<OrderReplyItemDto> | null;
}

