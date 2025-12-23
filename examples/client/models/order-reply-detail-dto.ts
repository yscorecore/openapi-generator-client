/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemDto } from './order-item-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderReplyItemDto } from './order-reply-item-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemDto } from './stock-in-item-dto';

export interface OrderReplyDetailDto {
    'supplierId'?: string;
    'supplierName'?: string | null;
    'replyItem'?: OrderReplyItemDto;
    'orderItem'?: OrderItemDto;
    'stockInItem'?: StockInItemDto;
    'allReplies'?: Array<OrderReplyItemDto> | null;
}

