/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockOutItemListDtoPaginationData } from './stock-out-item-list-dto-pagination-data';

export interface StockOutItemReportDto {
    'stockOutItemList'?: StockOutItemListDtoPaginationData;
    'totalPrice'?: number;
    'pricePerOnePerson'?: number;
    'createUser'?: string | null;
    'receiveUser'?: string | null;
}

