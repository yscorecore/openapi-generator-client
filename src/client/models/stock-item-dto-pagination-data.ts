/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockItemDto } from './stock-item-dto';

export interface StockItemDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<StockItemDto> | null;
    'totalRows'?: number;
}

