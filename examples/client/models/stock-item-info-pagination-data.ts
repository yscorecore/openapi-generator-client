/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockItemInfo } from './stock-item-info';

export interface StockItemInfoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<StockItemInfo> | null;
    'totalRows'?: number;
}

