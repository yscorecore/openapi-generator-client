/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderChannel } from './order-channel';
// May contain unused imports in some cases
// @ts-ignore
import type { StockDetail } from './stock-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { StockSummaryDto } from './stock-summary-dto';

export interface StockDto {
    'stockSummary'?: StockSummaryDto;
    'stockItems'?: Array<StockDetail> | null;
    'orderPlanChannel'?: OrderChannel;
}



