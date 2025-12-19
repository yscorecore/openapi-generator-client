/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { GoodsDto } from './goods-dto';

export interface GoodsDtoPagedList {
    'hasNext'?: boolean;
    'limit'?: number;
    'items'?: Array<GoodsDto> | null;
    'offset'?: number;
    'totalCount'?: number;
    'aggs'?: { [key: string]: any; } | null;
}

