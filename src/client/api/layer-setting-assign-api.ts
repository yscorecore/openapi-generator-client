/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { GroupValueInfo } from "../models"
import type { LayerValueInfo } from "../models"

/**
 * LayerSettingAssignApi - API class
 */
export class LayerSettingAssignApi {
    /**
     * 
     * @param GroupValueInfo? groupValueInfo 
     */
    public layerSettingsAssignPost(groupValueInfo?: GroupValueInfo): Promise<CodeResult> {
        return send({
            url: '/layer-settings/assign',
            method: 'POST',
            body: groupValueInfo,
        });
    }
    /**
     * 
     * @param string group 
     * @param Array<string>? roleCode 
     */
    public layerSettingsMockGroupGet(group: string | null, roleCode?: Array<string> | null): Promise<Array<LayerValueInfo>> {
        return send({
            url: '/layer-settings/mock/{group}'
                .replace(`{${"group"}}`, encodeURIComponent(String(group))),
            method: 'GET',
            params: {
                roleCode: roleCode,
            },
        });
    }
    /**
     * 
     * @param string group 
     * @param string? roleCode 
     */
    public layerSettingsQueryAssignByRoleGroupGet(group: string | null, roleCode?: string | null): Promise<{ [key: string]: string; }> {
        return send({
            url: '/layer-settings/query-assign-by-role/{group}'
                .replace(`{${"group"}}`, encodeURIComponent(String(group))),
            method: 'GET',
            params: {
                roleCode: roleCode,
            },
        });
    }
}

/**
 * LayerSettingAssignApi - instance
 */
export const LayerSettingAssignApiInstance = new LayerSettingAssignApi();

