/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { ObjectCodeResult } from "../models"
import type { StringObjectKeyValuePair } from "../models"

/**
 * UserSettingApi - API class
 */
export class UserSettingApi {
    /**
     * 
     * @param string key 
     */
    public apiUserSettingKeyDelete(key: string | null): Promise<CodeResult> {
        return send({
            url: '/api/UserSetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @param string key 
     */
    public apiUserSettingKeyGet(key: string | null): Promise<ObjectCodeResult> {
        return send({
            url: '/api/UserSetting/{key}'
                .replace(`{${"key"}}`, encodeURIComponent(String(key))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param boolean? keepstring 
     * @param StringObjectKeyValuePair? stringObjectKeyValuePair 
     */
    public apiUserSettingPost(keepstring?: boolean, stringObjectKeyValuePair?: StringObjectKeyValuePair): Promise<CodeResult> {
        return send({
            url: '/api/UserSetting',
            method: 'POST',
            params: {
                keepstring: keepstring,
            },
            body: stringObjectKeyValuePair,
        });
    }
}

/**
 * UserSettingApi - instance
 */
export const UserSettingApiInstance = new UserSettingApi();

