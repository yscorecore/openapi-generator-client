/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { FunctionTreeInfoCodeResult } from "../models"

/**
 * FunctionPermissionApi - API class
 */
export class FunctionPermissionApi {
    /**
     * 
     * @param string appId 
     * @param string functionCode 
     */
    public functionsAppIdCheckFunctionCodeGet(appId: string | null, functionCode: string | null): Promise<BooleanCodeResult> {
        return send({
            url: `/functions/{appId}/check/{functionCode}`
                .replace(`{${"appId"}}`, encodeURIComponent(String(appId)))
                .replace(`{${"functionCode"}}`, encodeURIComponent(String(functionCode))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string appId 
     * @param string? functionCode 
     */
    public functionsAppIdGet(appId: string | null, functionCode?: string | null): Promise<FunctionTreeInfoCodeResult> {
        return send({
            url: `/functions/{appId}`
                .replace(`{${"appId"}}`, encodeURIComponent(String(appId))),
            method: 'GET',
            params: {
                functionCode: functionCode,
            },
        });
    }
}

/**
 * FunctionPermissionApi - instance
 */
export const FunctionPermissionApiInstance = new FunctionPermissionApi();

