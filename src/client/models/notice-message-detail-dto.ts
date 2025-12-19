/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { NoticeMessageType } from './notice-message-type';

export interface NoticeMessageDetailDto {
    'id'?: string;
    'title'?: string | null;
    'from'?: string | null;
    'mustNeedReply'?: boolean;
    'content'?: string | null;
    'attachment'?: Array<string> | null;
    'isRead'?: boolean;
    'messageType'?: NoticeMessageType;
    'activeStartTime'?: string;
    'activeEndTime'?: string;
    'createTime'?: string;
}



