/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { HistoryPeelingInfo } from "../models"
import type { ImageBindInfo } from "../models"
import type { ModifyCheckMultipleReq } from "../models"
import type { OrderItemCheckInDetailReq } from "../models"
import type { OrderItemCheckInDetailRes } from "../models"
import type { OrderItemCode } from "../models"
import type { OrderItemPriceInfo } from "../models"
import type { OrderItemQgpInfo } from "../models"
import type { StockInAddFromDeepReq } from "../models"
import type { StockInAddReq } from "../models"
import type { StockInAddReq2 } from "../models"
import type { StockInItemModify } from "../models"
import type { StockInItemModifyMaterialType } from "../models"
import type { StockInRatingInfo } from "../models"
import type { StockInSummaryInfo } from "../models"
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
    public stockCerificateUrlIdDelete(id: string): Promise<void> {
        return send({
            url: '/stock/cerificateUrl/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 根据入库单更新供货商评分
     * @param StockInRatingInfo? stockInRatingInfo 
     */
    public stockEvaluatePost(stockInRatingInfo?: StockInRatingInfo): Promise<void> {
        return send({
            url: '/stock/evaluate',
            method: 'POST',
            body: stockInRatingInfo,
        });
    }
    /**
     * 
     * @param string? materialSpecId 
     * @param string? stockInItemId 
     */
    public stockHistoryPeelingsPost(materialSpecId?: string, stockInItemId?: string): Promise<Array<HistoryPeelingInfo>> {
        return send({
            url: '/stock/history-peelings',
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
    public stockInBindImagePost(imageBindInfo?: ImageBindInfo): Promise<boolean> {
        return send({
            url: '/stock/in/bind-image',
            method: 'POST',
            body: imageBindInfo,
        });
    }
    /**
     * 
     * @summary 软件版入库
     * @param StockInAddReq2? stockInAddReq2 
     */
    public stockInBySoftPost(stockInAddReq2?: StockInAddReq2): Promise<string> {
        return send({
            url: '/stock/in-by-soft',
            method: 'POST',
            body: stockInAddReq2,
        });
    }
    /**
     * 
     * @summary 删除入库检查
     * @param string id 
     */
    public stockInChecksIdDelete(id: string): Promise<boolean> {
        return send({
            url: '/stock/in/checks/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 入库检查
     * @param OrderItemCheckInDetailReq? orderItemCheckInDetailReq 
     */
    public stockInChecksPost(orderItemCheckInDetailReq?: OrderItemCheckInDetailReq): Promise<OrderItemCheckInDetailRes> {
        return send({
            url: '/stock/in/checks',
            method: 'POST',
            body: orderItemCheckInDetailReq,
        });
    }
    /**
     * 
     * @summary 入库详情
     * @param string? orderId 
     */
    public stockInDetailsGet(orderId?: string): Promise<Array<OrderItemCode>> {
        return send({
            url: '/stock/in/details',
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
    public stockInFormDeepPost(stockInAddFromDeepReq?: StockInAddFromDeepReq): Promise<string> {
        return send({
            url: '/stock/in-form-deep',
            method: 'POST',
            body: stockInAddFromDeepReq,
        });
    }
    /**
     * 
     * @summary 深加工入库新增
     * @param StockInAddFromDeepReq? stockInAddFromDeepReq 
     */
    public stockInFromDeepPost(stockInAddFromDeepReq?: StockInAddFromDeepReq): Promise<string> {
        return send({
            url: '/stock/in-from-deep',
            method: 'POST',
            body: stockInAddFromDeepReq,
        });
    }
    /**
     * 
     * @param ModifyCheckMultipleReq? modifyCheckMultipleReq 
     */
    public stockInModifyCheckMultiplePost(modifyCheckMultipleReq?: ModifyCheckMultipleReq): Promise<void> {
        return send({
            url: '/stock/in/modifyCheckMultiple',
            method: 'POST',
            body: modifyCheckMultipleReq,
        });
    }
    /**
     * 
     * @summary 缺货标记
     * @param string? orderItemId 
     */
    public stockInOrderitemMarkOutOfStockPost(orderItemId?: string): Promise<void> {
        return send({
            url: '/stock/in/orderitem/mark-out-of-stock',
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
    public stockInOrderitemResetOutOfStockPost(orderItemId?: string): Promise<void> {
        return send({
            url: '/stock/in/orderitem/reset-out-of-stock',
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
    public stockInPost(stockInAddReq?: StockInAddReq): Promise<string> {
        return send({
            url: '/stock/in',
            method: 'POST',
            body: stockInAddReq,
        });
    }
    /**
     * 
     * @summary 入库数量统计
     * @param string id 
     */
    public stockInSummaryIdGet(id: string): Promise<StockInSummaryInfo> {
        return send({
            url: '/stock/in/summary/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 修改索证
     * @param StockInItemModify? stockInItemModify 
     */
    public stockModifyCerificateUrlPost(stockInItemModify?: StockInItemModify): Promise<void> {
        return send({
            url: '/stock/modifyCerificateUrl',
            method: 'POST',
            body: stockInItemModify,
        });
    }
    /**
     * 
     * @summary 修改入库的食材分类
     * @param StockInItemModifyMaterialType? stockInItemModifyMaterialType 
     */
    public stockModifyMaterialTypePost(stockInItemModifyMaterialType?: StockInItemModifyMaterialType): Promise<void> {
        return send({
            url: '/stock/modifyMaterialType',
            method: 'POST',
            body: stockInItemModifyMaterialType,
        });
    }
    /**
     * 
     * @summary 更新入库入库后照片
     * @param UpdateAfterStockImagesReq? updateAfterStockImagesReq 
     */
    public stockStockImagesPost(updateAfterStockImagesReq?: UpdateAfterStockImagesReq): Promise<boolean> {
        return send({
            url: '/stock/stock_images',
            method: 'POST',
            body: updateAfterStockImagesReq,
        });
    }
    /**
     * 
     * @summary 更新单价
     * @param OrderItemPriceInfo? orderItemPriceInfo 
     */
    public stockUpdatePricePost(orderItemPriceInfo?: OrderItemPriceInfo): Promise<boolean> {
        return send({
            url: '/stock/update-price',
            method: 'POST',
            body: orderItemPriceInfo,
        });
    }
    /**
     * 
     * @summary 更新保质期
     * @param OrderItemQgpInfo? orderItemQgpInfo 
     */
    public stockUpdateQgpPost(orderItemQgpInfo?: OrderItemQgpInfo): Promise<boolean> {
        return send({
            url: '/stock/update-qgp',
            method: 'POST',
            body: orderItemQgpInfo,
        });
    }
}

/**
 * SchoolStockInApi - instance
 */
export const SchoolStockInApiInstance = new SchoolStockInApi();

