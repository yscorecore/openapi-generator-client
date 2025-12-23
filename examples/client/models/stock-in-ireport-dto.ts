/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockItemDto } from './stock-item-dto';

export interface StockInIReportDto {
    'suppliers'?: Array<string> | null;
    'actualTotalPrice'?: number;
    'allStockItems'?: Array<StockItemDto> | null;
}

