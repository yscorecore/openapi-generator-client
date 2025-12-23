/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { FileInfo } from './file-info';
// May contain unused imports in some cases
// @ts-ignore
import type { MonthSummaryScope } from './month-summary-scope';
// May contain unused imports in some cases
// @ts-ignore
import type { MonthSummaryType } from './month-summary-type';

export interface MonthSubmitInfo {
    'startDate'?: string;
    'endDate'?: string;
    'monthType'?: MonthSummaryScope;
    'title'?: string | null;
    'type'?: MonthSummaryType;
    'files': Array<FileInfo>;
}



