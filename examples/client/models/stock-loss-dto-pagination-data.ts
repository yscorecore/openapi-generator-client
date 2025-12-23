/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockLossDto } from './stock-loss-dto';

export interface StockLossDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<StockLossDto> | null;
    'totalRows'?: number;
}

