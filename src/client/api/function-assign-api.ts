/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { AssignByRoleInfo } from "../models"
import type { CodeResult } from "../models"
import type { FunctionMockTreeInfoCodeResult } from "../models"
import type { StringFunctionAssignObjectInfoDictionaryCodeResult } from "../models"
import type { StringListCodeResult } from "../models"

/**
 * FunctionAssignApi - API class
 */
export class FunctionAssignApi {
    /**
     * 
     * @param AssignByRoleInfo? assignByRoleInfo 
     */
    public functionsAssignPost(assignByRoleInfo?: AssignByRoleInfo): Promise<CodeResult> {
        return send({
            url: `/functions/assign`,
            method: 'POST',
            body: assignByRoleInfo,
        });
    }
    /**
     * 
     * @param string appId 
     * @param Array<string>? roleCode 
     */
    public functionsMockAppIdGet(appId: string | null, roleCode?: Array<string> | null): Promise<FunctionMockTreeInfoCodeResult> {
        return send({
            url: `/functions/mock/{appId}`
                .replace(`{${"appId"}}`, encodeURIComponent(String(appId))),
            method: 'GET',
            params: {
                roleCode: roleCode,
            },
        });
    }
    /**
     * 
     * @param string appId 
     * @param string? roleCode 
     */
    public functionsQueryAssignByRoleAppIdGet(appId: string | null, roleCode?: string | null): Promise<StringFunctionAssignObjectInfoDictionaryCodeResult> {
        return send({
            url: `/functions/query-assign-by-role/{appId}`
                .replace(`{${"appId"}}`, encodeURIComponent(String(appId))),
            method: 'GET',
            params: {
                roleCode: roleCode,
            },
        });
    }
    /**
     * 
     * @param string appId 
     * @param string? roleCode 
     */
    public functionsQueryAssignFunctionsByRoleAppIdGet(appId: string | null, roleCode?: string | null): Promise<StringListCodeResult> {
        return send({
            url: `/functions/query-assign-functions-by-role/{appId}`
                .replace(`{${"appId"}}`, encodeURIComponent(String(appId))),
            method: 'GET',
            params: {
                roleCode: roleCode,
            },
        });
    }
}

/**
 * FunctionAssignApi - instance
 */
export const FunctionAssignApiInstance = new FunctionAssignApi();

