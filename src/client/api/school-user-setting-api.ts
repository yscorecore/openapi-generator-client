/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { StringObjectKeyValuePair } from "../models"

/**
 * SchoolUserSettingApi - API class
 */
export class SchoolUserSettingApi {
    /**
     * 
     * @param string key 
     */
    public apiSchoolUserSettingKeyDelete(key: string | null): Promise<CodeResult> {
        return send({
            url: '/api/SchoolUserSetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @param string key 
     */
    public apiSchoolUserSettingKeyGet(key: string | null): Promise<any> {
        return send({
            url: '/api/SchoolUserSetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param boolean? keepstring 
     * @param StringObjectKeyValuePair? stringObjectKeyValuePair 
     */
    public apiSchoolUserSettingPost(keepstring?: boolean, stringObjectKeyValuePair?: StringObjectKeyValuePair): Promise<CodeResult> {
        return send({
            url: '/api/SchoolUserSetting',
            method: 'POST',
            params: {
                keepstring: keepstring,
            },
            body: stringObjectKeyValuePair,
        });
    }
}

/**
 * SchoolUserSettingApi - instance
 */
export const SchoolUserSettingApiInstance = new SchoolUserSettingApi();

