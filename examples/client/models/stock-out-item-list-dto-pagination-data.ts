/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockOutItemListDto } from './stock-out-item-list-dto';

export interface StockOutItemListDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<StockOutItemListDto> | null;
    'totalRows'?: number;
}

