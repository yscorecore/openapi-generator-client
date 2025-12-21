/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { StringObjectKeyValuePair } from "../models"

/**
 * WechatSettingApi - API class
 */
export class WechatSettingApi {
    /**
     * 
     * @param string key 
     */
    public apiWechatSettingKeyDelete(key: string | null): Promise<void> {
        return send({
            url: '/api/WechatSetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @param string key 
     */
    public apiWechatSettingKeyGet(key: string | null): Promise<any> {
        return send({
            url: '/api/WechatSetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param boolean? keepstring 
     * @param StringObjectKeyValuePair? stringObjectKeyValuePair 
     */
    public apiWechatSettingPost(keepstring?: boolean, stringObjectKeyValuePair?: StringObjectKeyValuePair): Promise<void> {
        return send({
            url: '/api/WechatSetting',
            method: 'POST',
            params: {
                keepstring: keepstring,
            },
            body: stringObjectKeyValuePair,
        });
    }
}

/**
 * WechatSettingApi - instance
 */
export const WechatSettingApiInstance = new WechatSettingApi();

