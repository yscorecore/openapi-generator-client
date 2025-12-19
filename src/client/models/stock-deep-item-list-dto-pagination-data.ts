/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockDeepItemListDto } from './stock-deep-item-list-dto';

export interface StockDeepItemListDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<StockDeepItemListDto> | null;
    'totalRows'?: number;
}

