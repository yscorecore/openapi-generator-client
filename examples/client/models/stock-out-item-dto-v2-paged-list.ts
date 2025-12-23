/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockOutItemDtoV2 } from './stock-out-item-dto-v2';

export interface StockOutItemDtoV2PagedList {
    'hasNext'?: boolean;
    'limit'?: number;
    'items'?: Array<StockOutItemDtoV2> | null;
    'offset'?: number;
    'totalCount'?: number;
    'aggs'?: { [key: string]: any; } | null;
}

