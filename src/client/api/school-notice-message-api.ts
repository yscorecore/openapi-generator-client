/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { NoticeMessageDetailDtoPaginationDataCodeResult } from "../models"
import type { NoticeMessageDtoCodeResult } from "../models"
import type { NoticeMessageType } from "../models"
import type { ReplyMessageDetail } from "../models"
import type { ReplyMessageDetailResListCodeResult } from "../models"

/**
 * SchoolNoticeMessageApi - API class
 */
export class SchoolNoticeMessageApi {
    /**
     * 
     * @summary 最新的一次公告
     */
    public noticeMessageLatestGet(): Promise<NoticeMessageDtoCodeResult> {
        return send({
            url: '/notice-message/latest',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取公告列表
     * @param boolean? isRead 
     * @param NoticeMessageType? messageType 
     * @param string? startDate 
     * @param string? endDate 
     * @param boolean? isExpire 
     * @param number? offset 
     * @param number? limit 
     */
    public noticeMessageListGet(isRead?: boolean | null, messageType?: NoticeMessageType, startDate?: string | null, endDate?: string | null, isExpire?: boolean | null, offset?: number, limit?: number): Promise<NoticeMessageDetailDtoPaginationDataCodeResult> {
        return send({
            url: '/notice-message/list',
            method: 'GET',
            params: {
                IsRead: isRead,
                MessageType: messageType,
                StartDate: startDate,
                EndDate: endDate,
                IsExpire: isExpire,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @param string id 
     */
    public noticeMessageQueryReplyIdGet(id: string): Promise<ReplyMessageDetailResListCodeResult> {
        return send({
            url: '/notice-message/queryReply/{Id}'
                .replace(`{${"Id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param ReplyMessageDetail? replyMessageDetail 
     */
    public noticeMessageReplyMessagePost(replyMessageDetail?: ReplyMessageDetail): Promise<CodeResult> {
        return send({
            url: '/notice-message/replyMessage',
            method: 'POST',
            body: replyMessageDetail,
        });
    }
    /**
     * 
     * @summary 设置已读
     * @param string id 
     */
    public noticeMessageSetReadIdPost(id: string): Promise<CodeResult> {
        return send({
            url: '/notice-message/setRead/{Id}'
                .replace(`{${"Id"}}`, encodeURIComponent(String(id))),
            method: 'POST',
        });
    }
}

/**
 * SchoolNoticeMessageApi - instance
 */
export const SchoolNoticeMessageApiInstance = new SchoolNoticeMessageApi();

