/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { HelpVideoDto } from "../models"

/**
 * SchoolHelpCenterApi - API class
 */
export class SchoolHelpCenterApi {
    /**
     * 
     * @summary 帮助中心的单个视频
     * @param string? title 
     */
    public helpVideoGet(title?: string | null): Promise<HelpVideoDto> {
        return send({
            url: '/help/video',
            method: 'GET',
            params: {
                title: title,
            },
        });
    }
    /**
     * 
     * @summary 获取帮助中心的视频
     */
    public helpVideosGet(): Promise<Array<HelpVideoDto>> {
        return send({
            url: '/help/videos',
            method: 'GET',
        });
    }
}

/**
 * SchoolHelpCenterApi - instance
 */
export const SchoolHelpCenterApiInstance = new SchoolHelpCenterApi();

