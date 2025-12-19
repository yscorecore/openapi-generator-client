/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemInfo } from './stock-in-item-info';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInOrderInfo } from './stock-in-order-info';
// May contain unused imports in some cases
// @ts-ignore
import type { StockSummary } from './stock-summary';

export interface CompletedStockInInfo {
    'createTime'?: string;
    'id'?: string;
    'stockCode'?: string | null;
    'supplierName'?: string | null;
    'orderId'?: string;
    'operatorName'?: string | null;
    'orderUser'?: string | null;
    'totalPrice'?: number;
    'order'?: StockInOrderInfo;
    'stockInItems'?: Array<StockInItemInfo> | null;
    'isCompleted'?: boolean;
    'beforeStockImages'?: Array<string> | null;
    'afterStockImages'?: Array<string> | null;
    'invoiceUrl'?: string | null;
    'summary'?: StockSummary;
    'orderRemark'?: string | null;
}

