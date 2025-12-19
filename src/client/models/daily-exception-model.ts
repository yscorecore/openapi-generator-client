/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AvgCostAnomalies } from './avg-cost-anomalies';
// May contain unused imports in some cases
// @ts-ignore
import type { DeviceOffline } from './device-offline';
// May contain unused imports in some cases
// @ts-ignore
import type { HeadcountGap } from './headcount-gap';
// May contain unused imports in some cases
// @ts-ignore
import type { LossException } from './loss-exception';
// May contain unused imports in some cases
// @ts-ignore
import type { RepeatAcceptance } from './repeat-acceptance';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolImageException } from './school-image-exception';
// May contain unused imports in some cases
// @ts-ignore
import type { StockException } from './stock-exception';

export interface DailyExceptionModel {
    'exceptionsTotalCount'?: number;
    'messages'?: Array<string> | null;
    'expired'?: Array<StockException> | null;
    'nearlyExp'?: Array<StockException> | null;
    'headcountGap'?: HeadcountGap;
    'lossException'?: Array<LossException> | null;
    'avgCostAnomalies'?: AvgCostAnomalies;
    'repeatAcceptances'?: Array<RepeatAcceptance> | null;
    'deviceOffline'?: Array<DeviceOffline> | null;
    'expHealthImageData'?: Array<SchoolImageException> | null;
    'nearlyHealthExpImageData'?: Array<SchoolImageException> | null;
    'expQualificationImageData'?: Array<SchoolImageException> | null;
    'nearlyQualificationExpImageData'?: Array<SchoolImageException> | null;
}

