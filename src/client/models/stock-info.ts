/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';

export interface StockInfo {
    'id'?: string;
    'date'?: string;
    'stockCode'?: string | null;
    'supplierName'?: string | null;
    'operatorName'?: string | null;
    'orderUser'?: string | null;
    'isCompleted'?: boolean;
    'orderNeedPay'?: boolean;
    'summaryItemCount'?: number;
    'summaryEffectiveTotalPrice'?: number;
    'summaryDeepProcessingCount'?: number;
    'summaryDeepProcessingStockInCount'?: number;
    'summaryDeepProcessingCompletedCount'?: number;
    'deepProcessingCompleted'?: boolean;
    'allPriceConfirmed'?: boolean;
    'canSubmit'?: boolean;
    'orderOrderSource'?: OrderSource;
    'orderSupplyId'?: string | null;
    'orderType'?: OrderType;
    'schoolId'?: string;
    'schoolName'?: string | null;
}



