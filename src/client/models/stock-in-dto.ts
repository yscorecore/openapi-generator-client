/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemDto } from './stock-in-item-dto';

export interface StockInDto {
    'id'?: string;
    'createUser'?: string | null;
    'createTime'?: string;
    'stockCode'?: string | null;
    'stockInItems'?: Array<StockInItemDto> | null;
    'itemCount'?: number;
}

