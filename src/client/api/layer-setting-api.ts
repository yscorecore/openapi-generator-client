/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { StringObjectDictionaryCodeResult } from "../models"

/**
 * LayerSettingApi - API class
 */
export class LayerSettingApi {
    /**
     * 
     * @param string group 
     */
    public layerSettingsValueGroupGet(group: string | null): Promise<StringObjectDictionaryCodeResult> {
        return send({
            url: `/layer-settings/value/{group}`
                .replace(`{${"group"}}`, encodeURIComponent(String(group))),
            method: 'GET',
        });
    }
}

/**
 * LayerSettingApi - instance
 */
export const LayerSettingApiInstance = new LayerSettingApi();

