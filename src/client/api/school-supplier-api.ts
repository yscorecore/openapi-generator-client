/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { SchoolSupplierDetailCodeResult } from "../models"
import type { SchoolSupplierDtoPaginationDataCodeResult } from "../models"

/**
 * SchoolSupplierApi - API class
 */
export class SchoolSupplierApi {
    /**
     * 
     * @summary 从黑名单移除供货商
     * @param string supplierId 
     */
    public suppliersBlackSupplierIdDelete(supplierId: string): Promise<BooleanCodeResult> {
        return send({
            url: `/suppliers/black/{supplierId}`
                .replace(`{${"supplierId"}}`, encodeURIComponent(String(supplierId))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 设置黑名单
     * @param string supplierId 
     */
    public suppliersBlackSupplierIdPost(supplierId: string): Promise<BooleanCodeResult> {
        return send({
            url: `/suppliers/black/{supplierId}`
                .replace(`{${"supplierId"}}`, encodeURIComponent(String(supplierId))),
            method: 'POST',
        });
    }
    /**
     * 
     * @summary 查询所有供货商
     * @param number? offset 
     * @param number? limit 
     */
    public suppliersGet(offset?: number, limit?: number): Promise<SchoolSupplierDtoPaginationDataCodeResult> {
        return send({
            url: `/suppliers`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 供货商详情
     * @param string id 
     */
    public suppliersIdGet(id: string): Promise<SchoolSupplierDetailCodeResult> {
        return send({
            url: `/suppliers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
}

/**
 * SchoolSupplierApi - instance
 */
export const SchoolSupplierApiInstance = new SchoolSupplierApi();

