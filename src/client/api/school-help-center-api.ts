/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { HelpVideoDtoCodeResult } from "../models"
import type { HelpVideoDtoListCodeResult } from "../models"

/**
 * SchoolHelpCenterApi - API class
 */
export class SchoolHelpCenterApi {
    /**
     * 
     * @summary 帮助中心的单个视频
     * @param string? title 
     */
    public helpVideoGet(title?: string | null): Promise<HelpVideoDtoCodeResult> {
        return send({
            url: `/help/video`,
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
    public helpVideosGet(): Promise<HelpVideoDtoListCodeResult> {
        return send({
            url: `/help/videos`,
            method: 'GET',
        });
    }
}

/**
 * SchoolHelpCenterApi - instance
 */
export const SchoolHelpCenterApiInstance = new SchoolHelpCenterApi();

