/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemDto1 } from './stock-in-item-dto1';
// May contain unused imports in some cases
// @ts-ignore
import type { StockLossRecordDto } from './stock-loss-record-dto';

export interface StockLossDto {
    'stockInItem'?: StockInItemDto1;
    'stockInItemId'?: string;
    'stockInItemCode'?: string | null;
    'remarks'?: string | null;
    'lossAmount'?: number;
    'totalAmount'?: number;
    'lossPercent'?: number;
    'lossPrice'?: number;
    'isZero'?: boolean;
    'createTime'?: string;
    'createUser'?: string | null;
    'records'?: Array<StockLossRecordDto> | null;
    'schoolName'?: string | null;
}

