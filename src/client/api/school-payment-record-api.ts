/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { CreatePaymentRecordReq } from "../models"
import type { PaymentRecordDtoCodeResult } from "../models"
import type { PaymentRecordWithTotalAmountCodeResult } from "../models"
import type { PaymentType } from "../models"
import type { UpdatePaymentRecordReq } from "../models"

/**
 * SchoolPaymentRecordApi - API class
 */
export class SchoolPaymentRecordApi {
    /**
     * 
     * @summary 获取付款记录
     * @param string? startDate 
     * @param string? endDate 
     * @param string? supplierName 
     * @param PaymentType? paymentType 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public paymentRecordGet(startDate?: string | null, endDate?: string | null, supplierName?: string | null, paymentType?: PaymentType, schoolId?: string | null, offset?: number, limit?: number): Promise<PaymentRecordWithTotalAmountCodeResult> {
        return send({
            url: `/payment_record`,
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                SupplierName: supplierName,
                PaymentType: paymentType,
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
    public paymentRecordIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: `/payment_record/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取付款记录详情
     * @param string id 
     */
    public paymentRecordIdGet(id: string): Promise<PaymentRecordDtoCodeResult> {
        return send({
            url: `/payment_record/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 添加付款记录
     * @param CreatePaymentRecordReq? createPaymentRecordReq 
     */
    public paymentRecordPost(createPaymentRecordReq?: CreatePaymentRecordReq): Promise<BooleanCodeResult> {
        return send({
            url: `/payment_record`,
            method: 'POST',
            body: createPaymentRecordReq,
        });
    }
    /**
     * 
     * @summary 更新付款记录
     * @param UpdatePaymentRecordReq? updatePaymentRecordReq 
     */
    public paymentRecordPut(updatePaymentRecordReq?: UpdatePaymentRecordReq): Promise<BooleanCodeResult> {
        return send({
            url: `/payment_record`,
            method: 'PUT',
            body: updatePaymentRecordReq,
        });
    }
}

/**
 * SchoolPaymentRecordApi - instance
 */
export const SchoolPaymentRecordApiInstance = new SchoolPaymentRecordApi();

