/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { NoticeMessageType } from './notice-message-type';

export interface NoticeMessageDto {
    'id'?: string;
    'title'?: string | null;
    'from'?: string | null;
    'content'?: string | null;
    'attachments'?: Array<string> | null;
    'messageType'?: NoticeMessageType;
    'activeStartTime'?: string | null;
    'activeEndTime'?: string | null;
    'createTime'?: string;
}



