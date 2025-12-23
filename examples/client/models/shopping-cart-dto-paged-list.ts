/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ShoppingCartDto } from './shopping-cart-dto';

export interface ShoppingCartDtoPagedList {
    'hasNext'?: boolean;
    'limit'?: number;
    'items'?: Array<ShoppingCartDto> | null;
    'offset'?: number;
    'totalCount'?: number;
    'aggs'?: { [key: string]: any; } | null;
}

