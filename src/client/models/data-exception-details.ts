/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AbnormalInspection } from './abnormal-inspection';
// May contain unused imports in some cases
// @ts-ignore
import type { AvgCostAnomaly } from './avg-cost-anomaly';
// May contain unused imports in some cases
// @ts-ignore
import type { BatchInfo } from './batch-info';
// May contain unused imports in some cases
// @ts-ignore
import type { HeadCountGap } from './head-count-gap';
// May contain unused imports in some cases
// @ts-ignore
import type { LossDetail } from './loss-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { PriceExecption } from './price-execption';

export interface DataExceptionDetails {
    'lossDetails'?: Array<LossDetail> | null;
    'differentPrices'?: Array<BatchInfo> | null;
    'headCountGaps'?: Array<HeadCountGap> | null;
    'abnormalInspection'?: Array<AbnormalInspection> | null;
    'avgCostAnomaly'?: Array<AvgCostAnomaly> | null;
    'priceExecption'?: PriceExecption;
}

