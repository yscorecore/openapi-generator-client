/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CostInfo } from './cost-info';
// May contain unused imports in some cases
// @ts-ignore
import type { CostSummary } from './cost-summary';

export interface CostInfoCostSummaryPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<CostInfo> | null;
    'totalRows'?: number;
    'summary'?: CostSummary;
}

