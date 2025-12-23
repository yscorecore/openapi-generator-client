/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockReturnItemListDto } from './stock-return-item-list-dto';

export interface StockReturnItemListDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<StockReturnItemListDto> | null;
    'totalRows'?: number;
}

