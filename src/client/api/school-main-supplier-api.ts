/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AreaMainSupplierDtoPaginationDataCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { MainSupplierMaterialTypeCrossConfigDtoPaginationDataCodeResult } from "../models"
import type { MainSupplierMaterialTypeCrossConfigSaveDto } from "../models"

/**
 * SchoolMainSupplierApi - API class
 */
export class SchoolMainSupplierApi {
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     */
    public mainSupplierCrossConfigsGet(offset?: number, limit?: number): Promise<MainSupplierMaterialTypeCrossConfigDtoPaginationDataCodeResult> {
        return send({
            url: `/main-supplier/cross-configs`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @param Array<MainSupplierMaterialTypeCrossConfigSaveDto>? mainSupplierMaterialTypeCrossConfigSaveDto 
     */
    public mainSupplierCrossConfigsPost(mainSupplierMaterialTypeCrossConfigSaveDto?: Array<MainSupplierMaterialTypeCrossConfigSaveDto> | null): Promise<CodeResult> {
        return send({
            url: `/main-supplier/cross-configs`,
            method: 'POST',
            body: mainSupplierMaterialTypeCrossConfigSaveDto,
        });
    }
    /**
     * 
     * @summary 获取认证供货商
     * @param number? offset 
     * @param number? limit 
     */
    public mainSupplierGet(offset?: number, limit?: number): Promise<AreaMainSupplierDtoPaginationDataCodeResult> {
        return send({
            url: `/main-supplier`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
            },
        });
    }
}

/**
 * SchoolMainSupplierApi - instance
 */
export const SchoolMainSupplierApiInstance = new SchoolMainSupplierApi();

