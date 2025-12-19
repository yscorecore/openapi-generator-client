/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderItemDto } from './order-item-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderStatus } from './order-status';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInDto } from './stock-in-dto';

export interface OrderDto {
    'id'?: string;
    'createUser'?: string | null;
    'createTime'?: string;
    'orderCode'?: string | null;
    'status'?: OrderStatus;
    'orderReplyId'?: string | null;
    'stockIns'?: Array<StockInDto> | null;
    'itemCount'?: number;
    'orderItems'?: Array<OrderItemDto> | null;
    'minPriceWonCount'?: number;
}



