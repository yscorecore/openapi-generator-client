/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SchoolEventDto } from './school-event-dto';

export interface SchoolEventDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<SchoolEventDto> | null;
    'totalRows'?: number;
}

