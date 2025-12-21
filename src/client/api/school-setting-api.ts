/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { StringObjectKeyValuePair } from "../models"
import type { StringStringKeyValuePair } from "../models"

/**
 * SchoolSettingApi - API class
 */
export class SchoolSettingApi {
    /**
     * 
     * @param string key 
     */
    public apiSchoolSettingKeyDelete(key: string | null): Promise<CodeResult> {
        return send({
            url: '/api/SchoolSetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @param string key 
     */
    public apiSchoolSettingKeyGet(key: string | null): Promise<any> {
        return send({
            url: '/api/SchoolSetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param boolean? keepstring 
     * @param StringObjectKeyValuePair? stringObjectKeyValuePair 
     */
    public apiSchoolSettingPost(keepstring?: boolean, stringObjectKeyValuePair?: StringObjectKeyValuePair): Promise<CodeResult> {
        return send({
            url: '/api/SchoolSetting',
            method: 'POST',
            params: {
                keepstring: keepstring,
            },
            body: stringObjectKeyValuePair,
        });
    }
    /**
     * 
     * @summary 删除配置
     * @param string key 
     */
    public schoolsettingKeyDelete(key: string | null): Promise<CodeResult> {
        return send({
            url: '/schoolsetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取配置
     * @param string key 
     */
    public schoolsettingKeyGet(key: string | null): Promise<string> {
        return send({
            url: '/schoolsetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 新增配置
     * @param StringStringKeyValuePair? stringStringKeyValuePair 
     */
    public schoolsettingPost(stringStringKeyValuePair?: StringStringKeyValuePair): Promise<CodeResult> {
        return send({
            url: '/schoolsetting',
            method: 'POST',
            body: stringStringKeyValuePair,
        });
    }
}

/**
 * SchoolSettingApi - instance
 */
export const SchoolSettingApiInstance = new SchoolSettingApi();

