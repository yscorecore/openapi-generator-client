/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { GoodsDto } from './goods-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface ShoppingCartDto {
    'id'?: string;
    'goods'?: GoodsDto;
    'goodsId'?: string;
    'amount'?: number;
    'remark'?: string | null;
    'batch'?: string | null;
    'orderType'?: OrderType;
}



