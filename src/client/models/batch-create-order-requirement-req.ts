/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { TimeSpan } from './time-span';

export interface BatchCreateOrderRequirementReq {
    'startDate'?: string;
    'endDate'?: string;
    'deliveryTime'?: TimeSpan;
    'offset'?: number;
    'persons'?: { [key: string]: number; } | null;
}

