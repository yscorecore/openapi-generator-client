/* tslint:disable */
/* eslint-disable */



export interface DiningCostDto {
    'month'?: string;
    'week'?: string;
    'stockOutTotalPrice'?: number;
    'lossTotalPrice'?: number;
    'costTotalPrice'?: number;
    'costPerPerson'?: number;
    'studentDinningsCount'?: number;
    'accompanyCount'?: number;
    'publicAccompanyCount'?: number;
    'internalAccompanyCount'?: number;
    'actualCostPerPerson'?: number | null;
    'latestReportSuccess'?: boolean | null;
    'latestReportErrorMesage'?: string | null;
    'latestReportTotalCount'?: number | null;
    'latestReportIncreaseCount'?: number | null;
    'latestReportDecreaseCount'?: number | null;
    'latestReportDiningCount'?: number | null;
    'latestReportTime'?: string | null;
}

