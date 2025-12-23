/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockOutItemDto1 } from './stock-out-item-dto1';
// May contain unused imports in some cases
// @ts-ignore
import type { SummaryDto } from './summary-dto';

export interface StockOutDto {
    'code'?: string | null;
    'receiveUser'?: string | null;
    'operatorName'?: string | null;
    'summary'?: SummaryDto;
    'id'?: string;
    'createTime'?: string;
    'stockOutItems'?: Array<StockOutItemDto1> | null;
}

