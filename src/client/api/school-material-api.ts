/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { EditConfig } from "../models"
import type { GuidCodeResult } from "../models"
import type { MaterialAddDto } from "../models"
import type { MaterialDetailDtoCodeResult } from "../models"
import type { MaterialDetailDtoPaginationResCodeResult } from "../models"
import type { MaterialEditDto } from "../models"
import type { MaterialLifecycleDtoListCodeResult } from "../models"
import type { MaterialSpecListDtoListCodeResult } from "../models"
import type { MaterialTypeDtoListCodeResult } from "../models"
import type { SchoolUsualMaterialDtoListCodeResult } from "../models"
import type { SchoolUsualMaterialSpecDtoListCodeResult } from "../models"
import type { StockWarningReq } from "../models"
import type { StockWarningResponsePaginationDataCodeResult } from "../models"

/**
 * SchoolMaterialApi - API class
 */
export class SchoolMaterialApi {
    /**
     * 
     * @param Array<StockWarningReq>? stockWarningReq 
     */
    public materialBatchSetMaterialWarningThresholdPost(stockWarningReq?: Array<StockWarningReq> | null): Promise<CodeResult> {
        return send({
            url: '/material/batch-set-material-warning-threshold',
            method: 'POST',
            body: stockWarningReq,
        });
    }
    /**
     * 
     * @param string id 
     */
    public materialDeleteWarningConfigIdDelete(id: string): Promise<CodeResult> {
        return send({
            url: '/material/delete-warning-config/{Id}'
                .replace(`{${"Id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取原材料列表
     * @param number? type 
     * @param string? name 
     * @param boolean? isManaged 
     * @param number? page 
     * @param number? size 
     */
    public materialGet(type?: number | null, name?: string | null, isManaged?: boolean | null, page?: number, size?: number): Promise<MaterialDetailDtoPaginationResCodeResult> {
        return send({
            url: '/material',
            method: 'GET',
            params: {
                Type: type,
                Name: name,
                IsManaged: isManaged,
                Page: page,
                Size: size,
            },
        });
    }
    /**
     * 
     * @summary 根据ID删除原材料
     * @param string id 原材料ID
     */
    public materialIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: '/material/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取原材料详情
     * @param string id 
     */
    public materialIdGet(id: string): Promise<MaterialDetailDtoCodeResult> {
        return send({
            url: '/material/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 新增原材料
     * @param MaterialAddDto? materialAddDto 待新增的原材料信息
     */
    public materialPost(materialAddDto?: MaterialAddDto): Promise<GuidCodeResult> {
        return send({
            url: '/material',
            method: 'POST',
            body: materialAddDto,
        });
    }
    /**
     * 
     * @summary 修改原材料
     * @param MaterialEditDto? materialEditDto 需更新的原材料
     */
    public materialPut(materialEditDto?: MaterialEditDto): Promise<BooleanCodeResult> {
        return send({
            url: '/material',
            method: 'PUT',
            body: materialEditDto,
        });
    }
    /**
     * 
     * @param boolean? isMaterial 
     * @param boolean? enabled 
     * @param string? name 
     * @param number? offset 
     * @param number? limit 
     */
    public materialQueryWarningConfigGet(isMaterial?: boolean | null, enabled?: boolean | null, name?: string | null, offset?: number, limit?: number): Promise<StockWarningResponsePaginationDataCodeResult> {
        return send({
            url: '/material/query-warning-config',
            method: 'GET',
            params: {
                IsMaterial: isMaterial,
                Enabled: enabled,
                Name: name,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 获取原材料规格列表
     * @param boolean? isDeep 
     * @param boolean? isMain 
     */
    public materialSpecGet(isDeep?: boolean | null, isMain?: boolean | null): Promise<MaterialSpecListDtoListCodeResult> {
        return send({
            url: '/material/spec',
            method: 'GET',
            params: {
                IsDeep: isDeep,
                IsMain: isMain,
            },
        });
    }
    /**
     * 
     * @summary 删除原材料规格
     * @param string id 
     */
    public materialSpecIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: '/material/spec/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取食材溯源
     * @param string stockInItemCode 
     */
    public materialStockInItemCodeLifecycleGet(stockInItemCode: string | null): Promise<MaterialLifecycleDtoListCodeResult> {
        return send({
            url: '/material/{stockInItemCode}/lifecycle'
                .replace(`{${"stockInItemCode"}}`, encodeURIComponent(String(stockInItemCode))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取所有的食材分类
     */
    public materialTypesGet(): Promise<MaterialTypeDtoListCodeResult> {
        return send({
            url: '/material/types',
            method: 'GET',
        });
    }
    /**
     * 
     * @param EditConfig? editConfig 
     */
    public materialUpdateWarningConfigPost(editConfig?: EditConfig): Promise<CodeResult> {
        return send({
            url: '/material/update-warning-config',
            method: 'POST',
            body: editConfig,
        });
    }
    /**
     * 
     */
    public materialUsualGet(): Promise<SchoolUsualMaterialDtoListCodeResult> {
        return send({
            url: '/material/usual',
            method: 'GET',
        });
    }
    /**
     * 
     */
    public materialUsualSpecGet(): Promise<SchoolUsualMaterialSpecDtoListCodeResult> {
        return send({
            url: '/material/usual-spec',
            method: 'GET',
        });
    }
}

/**
 * SchoolMaterialApi - instance
 */
export const SchoolMaterialApiInstance = new SchoolMaterialApi();

