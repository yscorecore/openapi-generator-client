/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MonthSummaryDto } from './month-summary-dto';

export interface MonthSummaryDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<MonthSummaryDto> | null;
    'totalRows'?: number;
}

