/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BillItemListCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { UploadBillDto } from "../models"

/**
 * TianFangBillApi - API class
 */
export class TianFangBillApi {
    /**
     * 
     * @summary 获取报账的信息
     * @param string? startDate 
     * @param string? endDate 
     */
    public tianfangGetBillGet(startDate?: string, endDate?: string): Promise<BillItemListCodeResult> {
        return send({
            url: '/tianfang/get-bill',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
            },
        });
    }
    /**
     * 
     * @summary 天方系统报账上报
     * @param UploadBillDto? uploadBillDto 
     */
    public tianfangUploadBillPost(uploadBillDto?: UploadBillDto): Promise<CodeResult> {
        return send({
            url: '/tianfang/upload-bill',
            method: 'POST',
            body: uploadBillDto,
        });
    }
}

/**
 * TianFangBillApi - instance
 */
export const TianFangBillApiInstance = new TianFangBillApi();

