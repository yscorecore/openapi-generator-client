/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { AppResourceInfoPagedListCodeResult } from "../models"

/**
 * AppResourceApi - API class
 */
export class AppResourceApi {
    /**
     * 
     * @param string group 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public appResourceGroupGet(group: string | null, offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<AppResourceInfoPagedListCodeResult> {
        return send({
            url: `/app-resource/{group}`
                .replace(`{${"group"}}`, encodeURIComponent(String(group))),
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
}

/**
 * AppResourceApi - instance
 */
export const AppResourceApiInstance = new AppResourceApi();

