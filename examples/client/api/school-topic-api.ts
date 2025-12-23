/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CompleteTopicDto } from "../models"
import type { RejectTopicDto } from "../models"
import type { TopicDto } from "../models"
import type { TopicStatus } from "../models"

/**
 * SchoolTopicApi - API class
 */
export class SchoolTopicApi {
    /**
     * 
     * @summary 处理建议
     * @param string? topicId 
     */
    public topicAcceptPost(topicId?: string): Promise<void> {
        return send({
            url: '/topic/accept',
            method: 'POST',
            params: {
                topicId: topicId,
            },
        });
    }
    /**
     * 
     * @summary 完成建议
     * @param CompleteTopicDto? completeTopicDto 
     */
    public topicCompletePost(completeTopicDto?: CompleteTopicDto): Promise<void> {
        return send({
            url: '/topic/complete',
            method: 'POST',
            body: completeTopicDto,
        });
    }
    /**
     * 
     * @summary 获取投诉详情
     * @param string? id 
     */
    public topicDetailGet(id?: string): Promise<TopicDto> {
        return send({
            url: '/topic/detail',
            method: 'GET',
            params: {
                id: id,
            },
        });
    }
    /**
     * 
     * @summary 获取所有投诉，可以根据订单状态或者分页查询
     * @param TopicStatus? status 
     * @param string? startTime 
     * @param number? pageSize 
     */
    public topicListGet(status?: TopicStatus, startTime?: string | null, pageSize?: number): Promise<Array<TopicDto>> {
        return send({
            url: '/topic/list',
            method: 'GET',
            params: {
                status: status,
                startTime: startTime,
                pageSize: pageSize,
            },
        });
    }
    /**
     * 
     * @summary \'拒绝
     * @param RejectTopicDto? rejectTopicDto 
     */
    public topicRejectPost(rejectTopicDto?: RejectTopicDto): Promise<void> {
        return send({
            url: '/topic/reject',
            method: 'POST',
            body: rejectTopicDto,
        });
    }
}

/**
 * SchoolTopicApi - instance
 */
export const SchoolTopicApiInstance = new SchoolTopicApi();

