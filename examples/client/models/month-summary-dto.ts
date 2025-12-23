/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MonthSummaryScope } from './month-summary-scope';
// May contain unused imports in some cases
// @ts-ignore
import type { MonthSummaryType } from './month-summary-type';

export interface MonthSummaryDto {
    'id'?: string;
    'title'?: string | null;
    'startDate'?: string;
    'endDate'?: string;
    'stockInCount'?: number;
    'stockInTotalPrice'?: number;
    'isCompleted'?: boolean;
    'completeUser'?: string | null;
    'completeTime'?: string | null;
    'type'?: MonthSummaryType;
    'scope'?: MonthSummaryScope;
    'version'?: string | null;
    'createUser'?: string | null;
    'createTime'?: string;
}



