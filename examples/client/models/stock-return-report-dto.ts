/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockReturnItemForReport } from './stock-return-item-for-report';

export interface StockReturnReportDto {
    'allStockItems'?: Array<StockReturnItemForReport> | null;
    'suppliers'?: Array<string> | null;
    'actualTotalPrice'?: number;
}

