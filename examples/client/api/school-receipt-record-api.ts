/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CreateNewReceiptReq } from "../models"
import type { ReceiptChannel } from "../models"
import type { ReceiptRecordDto } from "../models"
import type { ReceiptRecordWithTotalAmount } from "../models"
import type { UpdateReceiptReq } from "../models"

/**
 * SchoolReceiptRecordApi - API class
 */
export class SchoolReceiptRecordApi {
    /**
     * 
     * @summary 获取收款记录
     * @param string? startDate 
     * @param string? endDate 
     * @param ReceiptChannel? receiptChannel 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public receiptGet(startDate?: string | null, endDate?: string | null, receiptChannel?: ReceiptChannel, schoolId?: string | null, offset?: number, limit?: number): Promise<ReceiptRecordWithTotalAmount> {
        return send({
            url: '/receipt',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                ReceiptChannel: receiptChannel,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 删除付款记录
     * @param string id 
     */
    public receiptIdDelete(id: string): Promise<boolean> {
        return send({
            url: '/receipt/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取收款记录详情
     * @param string id 
     */
    public receiptIdGet(id: string): Promise<ReceiptRecordDto> {
        return send({
            url: '/receipt/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 添加收款记录
     * @param CreateNewReceiptReq? createNewReceiptReq 
     */
    public receiptPost(createNewReceiptReq?: CreateNewReceiptReq): Promise<boolean> {
        return send({
            url: '/receipt',
            method: 'POST',
            body: createNewReceiptReq,
        });
    }
    /**
     * 
     * @summary 修改付款记录
     * @param UpdateReceiptReq? updateReceiptReq 
     */
    public receiptPut(updateReceiptReq?: UpdateReceiptReq): Promise<boolean> {
        return send({
            url: '/receipt',
            method: 'PUT',
            body: updateReceiptReq,
        });
    }
}

/**
 * SchoolReceiptRecordApi - instance
 */
export const SchoolReceiptRecordApiInstance = new SchoolReceiptRecordApi();

