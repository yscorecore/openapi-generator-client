/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { GuidCodeResult } from "../models"
import type { HistoryPeelingInfoListCodeResult } from "../models"
import type { ImageBindInfo } from "../models"
import type { ModifyCheckMultipleReq } from "../models"
import type { OrderItemCheckInDetailReq } from "../models"
import type { OrderItemCheckInDetailResCodeResult } from "../models"
import type { OrderItemCodeListCodeResult } from "../models"
import type { OrderItemPriceInfo } from "../models"
import type { OrderItemQgpInfo } from "../models"
import type { StockInAddFromDeepReq } from "../models"
import type { StockInAddReq } from "../models"
import type { StockInAddReq2 } from "../models"
import type { StockInItemModify } from "../models"
import type { StockInItemModifyMaterialType } from "../models"
import type { StockInRatingInfo } from "../models"
import type { StockInSummaryInfoCodeResult } from "../models"
import type { UpdateAfterStockImagesReq } from "../models"

/**
 * SchoolStockInApi - API class
 */
export class SchoolStockInApi {
    /**
     * 
     * @summary 清空索证
     * @param string id 
     */
    public stockCerificateUrlIdDelete(id: string): Promise<CodeResult> {
        return send({
            url: `/stock/cerificateUrl/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 根据入库单更新供货商评分
     * @param StockInRatingInfo? stockInRatingInfo 
     */
    public stockEvaluatePost(stockInRatingInfo?: StockInRatingInfo): Promise<CodeResult> {
        return send({
            url: `/stock/evaluate`,
            method: 'POST',
            body: stockInRatingInfo,
        });
    }
    /**
     * 
     * @param string? materialSpecId 
     * @param string? stockInItemId 
     */
    public stockHistoryPeelingsPost(materialSpecId?: string, stockInItemId?: string): Promise<HistoryPeelingInfoListCodeResult> {
        return send({
            url: `/stock/history-peelings`,
            method: 'POST',
            params: {
                MaterialSpecId: materialSpecId,
                StockInItemId: stockInItemId,
            },
        });
    }
    /**
     * 
     * @summary 入库图片更新
     * @param ImageBindInfo? imageBindInfo 
     */
    public stockInBindImagePost(imageBindInfo?: ImageBindInfo): Promise<BooleanCodeResult> {
        return send({
            url: `/stock/in/bind-image`,
            method: 'POST',
            body: imageBindInfo,
        });
    }
    /**
     * 
     * @summary 软件版入库
     * @param StockInAddReq2? stockInAddReq2 
     */
    public stockInBySoftPost(stockInAddReq2?: StockInAddReq2): Promise<GuidCodeResult> {
        return send({
            url: `/stock/in-by-soft`,
            method: 'POST',
            body: stockInAddReq2,
        });
    }
    /**
     * 
     * @summary 删除入库检查
     * @param string id 
     */
    public stockInChecksIdDelete(id: string): Promise<BooleanCodeResult> {
        return send({
            url: `/stock/in/checks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 入库检查
     * @param OrderItemCheckInDetailReq? orderItemCheckInDetailReq 
     */
    public stockInChecksPost(orderItemCheckInDetailReq?: OrderItemCheckInDetailReq): Promise<OrderItemCheckInDetailResCodeResult> {
        return send({
            url: `/stock/in/checks`,
            method: 'POST',
            body: orderItemCheckInDetailReq,
        });
    }
    /**
     * 
     * @summary 入库详情
     * @param string? orderId 
     */
    public stockInDetailsGet(orderId?: string): Promise<OrderItemCodeListCodeResult> {
        return send({
            url: `/stock/in/details`,
            method: 'GET',
            params: {
                orderId: orderId,
            },
        });
    }
    /**
     * 
     * @summary 深加工入库新增
     * @param StockInAddFromDeepReq? stockInAddFromDeepReq 
     */
    public stockInFormDeepPost(stockInAddFromDeepReq?: StockInAddFromDeepReq): Promise<GuidCodeResult> {
        return send({
            url: `/stock/in-form-deep`,
            method: 'POST',
            body: stockInAddFromDeepReq,
        });
    }
    /**
     * 
     * @summary 深加工入库新增
     * @param StockInAddFromDeepReq? stockInAddFromDeepReq 
     */
    public stockInFromDeepPost(stockInAddFromDeepReq?: StockInAddFromDeepReq): Promise<GuidCodeResult> {
        return send({
            url: `/stock/in-from-deep`,
            method: 'POST',
            body: stockInAddFromDeepReq,
        });
    }
    /**
     * 
     * @param ModifyCheckMultipleReq? modifyCheckMultipleReq 
     */
    public stockInModifyCheckMultiplePost(modifyCheckMultipleReq?: ModifyCheckMultipleReq): Promise<CodeResult> {
        return send({
            url: `/stock/in/modifyCheckMultiple`,
            method: 'POST',
            body: modifyCheckMultipleReq,
        });
    }
    /**
     * 
     * @summary 缺货标记
     * @param string? orderItemId 
     */
    public stockInOrderitemMarkOutOfStockPost(orderItemId?: string): Promise<CodeResult> {
        return send({
            url: `/stock/in/orderitem/mark-out-of-stock`,
            method: 'POST',
            params: {
                orderItemId: orderItemId,
            },
        });
    }
    /**
     * 
     * @summary 取消缺货标记
     * @param string? orderItemId 
     */
    public stockInOrderitemResetOutOfStockPost(orderItemId?: string): Promise<CodeResult> {
        return send({
            url: `/stock/in/orderitem/reset-out-of-stock`,
            method: 'POST',
            params: {
                orderItemId: orderItemId,
            },
        });
    }
    /**
     * 
     * @summary 新增入库
     * @param StockInAddReq? stockInAddReq 
     */
    public stockInPost(stockInAddReq?: StockInAddReq): Promise<GuidCodeResult> {
        return send({
            url: `/stock/in`,
            method: 'POST',
            body: stockInAddReq,
        });
    }
    /**
     * 
     * @summary 入库数量统计
     * @param string id 
     */
    public stockInSummaryIdGet(id: string): Promise<StockInSummaryInfoCodeResult> {
        return send({
            url: `/stock/in/summary/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 修改索证
     * @param StockInItemModify? stockInItemModify 
     */
    public stockModifyCerificateUrlPost(stockInItemModify?: StockInItemModify): Promise<CodeResult> {
        return send({
            url: `/stock/modifyCerificateUrl`,
            method: 'POST',
            body: stockInItemModify,
        });
    }
    /**
     * 
     * @summary 修改入库的食材分类
     * @param StockInItemModifyMaterialType? stockInItemModifyMaterialType 
     */
    public stockModifyMaterialTypePost(stockInItemModifyMaterialType?: StockInItemModifyMaterialType): Promise<CodeResult> {
        return send({
            url: `/stock/modifyMaterialType`,
            method: 'POST',
            body: stockInItemModifyMaterialType,
        });
    }
    /**
     * 
     * @summary 更新入库入库后照片
     * @param UpdateAfterStockImagesReq? updateAfterStockImagesReq 
     */
    public stockStockImagesPost(updateAfterStockImagesReq?: UpdateAfterStockImagesReq): Promise<BooleanCodeResult> {
        return send({
            url: `/stock/stock_images`,
            method: 'POST',
            body: updateAfterStockImagesReq,
        });
    }
    /**
     * 
     * @summary 更新单价
     * @param OrderItemPriceInfo? orderItemPriceInfo 
     */
    public stockUpdatePricePost(orderItemPriceInfo?: OrderItemPriceInfo): Promise<BooleanCodeResult> {
        return send({
            url: `/stock/update-price`,
            method: 'POST',
            body: orderItemPriceInfo,
        });
    }
    /**
     * 
     * @summary 更新保质期
     * @param OrderItemQgpInfo? orderItemQgpInfo 
     */
    public stockUpdateQgpPost(orderItemQgpInfo?: OrderItemQgpInfo): Promise<BooleanCodeResult> {
        return send({
            url: `/stock/update-qgp`,
            method: 'POST',
            body: orderItemQgpInfo,
        });
    }
}

/**
 * SchoolStockInApi - instance
 */
export const SchoolStockInApiInstance = new SchoolStockInApi();

