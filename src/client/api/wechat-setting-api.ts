/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { ObjectCodeResult } from "../models"
import type { StringObjectKeyValuePair } from "../models"

/**
 * WechatSettingApi - API class
 */
export class WechatSettingApi {
    /**
     * 
     * @param string key 
     */
    public apiWechatSettingKeyDelete(key: string | null): Promise<CodeResult> {
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
    public apiWechatSettingKeyGet(key: string | null): Promise<ObjectCodeResult> {
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
    public apiWechatSettingPost(keepstring?: boolean, stringObjectKeyValuePair?: StringObjectKeyValuePair): Promise<CodeResult> {
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

