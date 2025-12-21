/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CaremaControl } from "../models"
import type { CodeResult } from "../models"
import type { NvrChannelDto } from "../models"
import type { StreamProtocol } from "../models"
import type { StreamType } from "../models"

/**
 * SchoolHardwareApi - API class
 */
export class SchoolHardwareApi {
    /**
     * 
     * @summary 获取所有硬件的配置信息
     */
    public hardwareConfigGet(): Promise<{ [key: string]: any; }> {
        return send({
            url: '/hardware/config',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 更新配置信息
     * @param { [key: string]: any; } requestBody 
     */
    public hardwareConfigPost(requestBody: { [key: string]: any; }): Promise<boolean> {
        return send({
            url: '/hardware/config',
            method: 'POST',
            body: requestBody,
        });
    }
    /**
     * 
     * @summary 云台控制（仅限海康）
     * @param CaremaControl? caremaControl 
     */
    public hardwareControllingCaremaPost(caremaControl?: CaremaControl): Promise<CodeResult> {
        return send({
            url: '/hardware/controllingCarema',
            method: 'POST',
            body: caremaControl,
        });
    }
    /**
     * 
     * @summary 获取所有通道
     */
    public hardwareNvrChannelsGet(): Promise<Array<NvrChannelDto>> {
        return send({
            url: '/hardware/nvr/channels',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取直播地址
     * @param string sn 
     * @param number channel 
     * @param StreamProtocol? protocal 
     * @param StreamType? type 
     */
    public hardwareNvrPlayurlSnChannelGet(sn: string | null, channel: number, protocal?: StreamProtocol, type?: StreamType): Promise<string> {
        return send({
            url: '/hardware/nvr/playurl/{sn}/{channel}'
                .replace(`{${"sn"}}`, encodeURIComponent(String(sn)))
                .replace(`{${"channel"}}`, encodeURIComponent(String(channel))),
            method: 'GET',
            params: {
                protocal: protocal,
                type: type,
            },
        });
    }
    /**
     * 
     * @summary 获取nvr的所有通道
     * @param string sn 
     */
    public hardwareNvrSnGet(sn: string | null): Promise<Array<NvrChannelDto>> {
        return send({
            url: '/hardware/nvr/{sn}'
                .replace(`{${"sn"}}`, encodeURIComponent(String(sn))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取对讲的Url(仅限海康)
     * @param string? indexCode 
     */
    public hardwareTalkUrlsGet(indexCode?: string | null): Promise<string> {
        return send({
            url: '/hardware/talkUrls',
            method: 'GET',
            params: {
                indexCode: indexCode,
            },
        });
    }
}

/**
 * SchoolHardwareApi - instance
 */
export const SchoolHardwareApiInstance = new SchoolHardwareApi();

