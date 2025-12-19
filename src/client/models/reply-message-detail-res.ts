/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ReplyStatus } from './reply-status';

export interface ReplyMessageDetailRes {
    'id'?: string;
    'noticeMessageDetailId'?: string;
    'title'?: string | null;
    'attachment'?: string | null;
    'replyContent'?: string | null;
    'replyStatus'?: ReplyStatus;
    'createTime'?: string;
    'createUser'?: string | null;
}



