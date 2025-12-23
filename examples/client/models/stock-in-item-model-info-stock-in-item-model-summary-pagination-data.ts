/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemModelInfo } from './stock-in-item-model-info';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemModelSummary } from './stock-in-item-model-summary';

export interface StockInItemModelInfoStockInItemModelSummaryPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<StockInItemModelInfo> | null;
    'totalRows'?: number;
    'summary'?: StockInItemModelSummary;
}

