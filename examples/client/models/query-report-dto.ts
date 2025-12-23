/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { BuinessReportStatus } from './buiness-report-status';

export interface QueryReportDto {
    'id'?: string;
    'date'?: string;
    'status'?: BuinessReportStatus;
    'fileUrls'?: Array<string> | null;
    'title'?: string | null;
    'content'?: string | null;
    'typeName'?: string | null;
    'createUser'?: string | null;
}



