/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AlarmInfo } from './alarm-info';

export interface UploadAlarmEventReq {
    'sn': string;
    'ch'?: number;
    'channelName'?: string | null;
    'result': AlarmInfo;
}

