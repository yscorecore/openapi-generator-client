/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DailyCheckDto } from './daily-check-dto';

export interface DailyCheckDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<DailyCheckDto> | null;
    'totalRows'?: number;
}

