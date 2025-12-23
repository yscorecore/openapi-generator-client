/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ExceptionDetails } from './exception-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ExceptionType } from './exception-type';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolEventProcessSource } from './school-event-process-source';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolEventStatus } from './school-event-status';

export interface SchoolEventDto {
    'id'?: string;
    'schoolId'?: string;
    'schoolName'?: string | null;
    'schoolAreaFullName'?: string | null;
    'category'?: ExceptionType;
    'data'?: ExceptionDetails;
    'date'?: string;
    'detailCount'?: number;
    'status'?: SchoolEventStatus;
    'processor'?: string | null;
    'processTime'?: string | null;
    'processSource'?: SchoolEventProcessSource;
    'conclusion'?: string | null;
    'attachment'?: Array<string> | null;
}



