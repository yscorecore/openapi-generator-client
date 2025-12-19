/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DeepProcessingInfo } from './deep-processing-info';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInItemsInfo } from './stock-in-items-info';
// May contain unused imports in some cases
// @ts-ignore
import type { StockOutInfo1 } from './stock-out-info1';
// May contain unused imports in some cases
// @ts-ignore
import type { StockReturnInfo } from './stock-return-info';

export interface InspectionVideo {
    'stockInItemsInfo'?: Array<StockInItemsInfo> | null;
    'stockOutItems'?: Array<StockOutInfo1> | null;
    'stockReturnItems'?: Array<StockReturnInfo> | null;
    'deepProcessingInfos'?: Array<DeepProcessingInfo> | null;
}

