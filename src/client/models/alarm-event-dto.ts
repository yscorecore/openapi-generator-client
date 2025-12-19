/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AlarmType } from './alarm-type';

export interface AlarmEventDto {
    'id'?: string;
    'createTime'?: string;
    'nvr'?: string | null;
    'channel'?: number;
    'eventType'?: AlarmType;
    'alarmType'?: AlarmType;
    'type'?: AlarmType;
    'alarmId'?: string | null;
    'eventTime'?: string;
    'alarmTime'?: string;
    'alarmTopX'?: number;
    'alarmTopY'?: number;
    'alarmBottomX'?: number;
    'alarmbottomY'?: number;
    'alarmBigImage'?: string | null;
    'alarmSmallImage'?: string | null;
    'channelName'?: string | null;
}



