/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AutoPurchaseConfigDto } from "../models"
import type { AutoPurchaseConfigForEditReqDto } from "../models"
import type { AutoPurchaseConfigForSetReq } from "../models"
import type { AutoPurchaseConfigReqDto } from "../models"
import type { AutoPurchaseMinStockConfigReq } from "../models"
import type { MainSupplierWithMaterialsDto } from "../models"
import type { SchoolConfigForAutoPurchaseDto } from "../models"

/**
 * AutoPurchaseApi - API class
 */
export class AutoPurchaseApi {
    /**
     * 
     * @summary 加载自动采购开关配置
     */
    public autoPurchaseConfigGet(): Promise<SchoolConfigForAutoPurchaseDto> {
        return send({
            url: '/auto_purchase/config',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 修改自动采购开关配置
     * @param SchoolConfigForAutoPurchaseDto? schoolConfigForAutoPurchaseDto 
     */
    public autoPurchaseConfigSetPost(schoolConfigForAutoPurchaseDto?: SchoolConfigForAutoPurchaseDto): Promise<boolean> {
        return send({
            url: '/auto_purchase/config/set',
            method: 'POST',
            body: schoolConfigForAutoPurchaseDto,
        });
    }
    /**
     * 
     * @summary 获取可供应食材列表
     */
    public autoPurchaseMainSupplierMaterialsGet(): Promise<Array<MainSupplierWithMaterialsDto>> {
        return send({
            url: '/auto_purchase/mainSupplier_materials',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 最小库存配置
     * @param AutoPurchaseMinStockConfigReq? autoPurchaseMinStockConfigReq 
     */
    public autoPurchaseSafeMinStockConfigPost(autoPurchaseMinStockConfigReq?: AutoPurchaseMinStockConfigReq): Promise<boolean> {
        return send({
            url: '/auto_purchase/safe_min_stock_config',
            method: 'POST',
            body: autoPurchaseMinStockConfigReq,
        });
    }
    /**
     * 
     * @summary 启用/停用安全库存配置
     * @param AutoPurchaseConfigForSetReq? autoPurchaseConfigForSetReq 
     */
    public autoPurchaseSafeStockInConfigPost(autoPurchaseConfigForSetReq?: AutoPurchaseConfigForSetReq): Promise<boolean> {
        return send({
            url: '/auto_purchase/safe_stockIn_config',
            method: 'POST',
            body: autoPurchaseConfigForSetReq,
        });
    }
    /**
     * 
     * @summary 删除安全库存配置
     * @param Array<string>? requestBody 
     */
    public autoPurchaseSafeStockInConfigsDelete(requestBody?: Array<string> | null): Promise<boolean> {
        return send({
            url: '/auto_purchase/safe_stockIn_configs',
            method: 'DELETE',
            body: requestBody,
        });
    }
    /**
     * 
     * @summary 修改安全库存配置
     * @param AutoPurchaseConfigForEditReqDto? autoPurchaseConfigForEditReqDto 
     */
    public autoPurchaseSafeStockInConfigsEditPut(autoPurchaseConfigForEditReqDto?: AutoPurchaseConfigForEditReqDto): Promise<boolean> {
        return send({
            url: '/auto_purchase/safe_stockIn_configs/edit',
            method: 'PUT',
            body: autoPurchaseConfigForEditReqDto,
        });
    }
    /**
     * 
     * @summary 获取自动采购安全库存配置列表
     */
    public autoPurchaseSafeStockInConfigsGet(): Promise<Array<AutoPurchaseConfigDto>> {
        return send({
            url: '/auto_purchase/safe_stockIn_configs',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 添加安全库存配置
     * @param Array<AutoPurchaseConfigReqDto>? autoPurchaseConfigReqDto 
     */
    public autoPurchaseSafeStockInConfigsPost(autoPurchaseConfigReqDto?: Array<AutoPurchaseConfigReqDto> | null): Promise<boolean> {
        return send({
            url: '/auto_purchase/safe_stockIn_configs',
            method: 'POST',
            body: autoPurchaseConfigReqDto,
        });
    }
}

/**
 * AutoPurchaseApi - instance
 */
export const AutoPurchaseApiInstance = new AutoPurchaseApi();

