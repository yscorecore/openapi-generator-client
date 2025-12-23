/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockWarningResponse } from './stock-warning-response';

export interface StockWarningResponsePaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<StockWarningResponse> | null;
    'totalRows'?: number;
}

