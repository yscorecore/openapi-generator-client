/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AlarmEventDto } from './alarm-event-dto';

export interface AlarmEventDtoPaginationData {
    'offset'?: number;
    'limit'?: number;
    'items'?: Array<AlarmEventDto> | null;
    'totalRows'?: number;
}

