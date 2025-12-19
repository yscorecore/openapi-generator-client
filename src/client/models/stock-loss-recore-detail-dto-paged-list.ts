/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockLossRecoreDetailDto } from './stock-loss-recore-detail-dto';

export interface StockLossRecoreDetailDtoPagedList {
    'hasNext'?: boolean;
    'limit'?: number;
    'items'?: Array<StockLossRecoreDetailDto> | null;
    'offset'?: number;
    'totalCount'?: number;
    'aggs'?: { [key: string]: any; } | null;
}

