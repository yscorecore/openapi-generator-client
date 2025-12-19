/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ExceptionType } from './exception-type';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeSpan } from './time-span';

export interface MobileNotification {
    'phone'?: string | null;
    'notificationTypes'?: Array<ExceptionType> | null;
    'time'?: TimeSpan;
}

