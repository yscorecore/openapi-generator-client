/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { ObjectListCodeResult } from "../models"
import type { QueryFilter } from "../models"

/**
 * JiuQiBillApi - API class
 */
export class JiuQiBillApi {
    /**
     * 
     * @param string? startDate 
     * @param string? endDate 
     */
    public jiuqiGetBillGet(startDate?: string, endDate?: string): Promise<ObjectListCodeResult> {
        return send({
            url: '/jiuqi/get-bill',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
            },
        });
    }
    /**
     * 
     * @param QueryFilter? queryFilter 
     */
    public jiuqiUploadBillPost(queryFilter?: QueryFilter): Promise<CodeResult> {
        return send({
            url: '/jiuqi/upload-bill',
            method: 'POST',
            body: queryFilter,
        });
    }
}

/**
 * JiuQiBillApi - instance
 */
export const JiuQiBillApiInstance = new JiuQiBillApi();

