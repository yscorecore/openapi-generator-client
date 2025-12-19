/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { BooleanCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { CreateOrderReqV3 } from "../models"
import type { GuidCodeResult } from "../models"
import type { OrderItemCerificateUrl } from "../models"
import type { UpdateBeforeStockImagesReq } from "../models"

/**
 * SchoolOrderApi - API class
 */
export class SchoolOrderApi {
    /**
     * 
     * @summary 创建补录单 v3
     * @param CreateOrderReqV3? createOrderReqV3 
     */
    public ordersMendCreateV3Post(createOrderReqV3?: CreateOrderReqV3): Promise<GuidCodeResult> {
        return send({
            url: `/orders/mend/create/v3`,
            method: 'POST',
            body: createOrderReqV3,
        });
    }
    /**
     * 
     * @param OrderItemCerificateUrl? orderItemCerificateUrl 
     */
    public ordersModifyCerificateUrlPost(orderItemCerificateUrl?: OrderItemCerificateUrl): Promise<CodeResult> {
        return send({
            url: `/orders/modifyCerificateUrl`,
            method: 'POST',
            body: orderItemCerificateUrl,
        });
    }
    /**
     * 
     * @summary 删除未入库订单
     * @param Array<string>? id Id
     */
    public ordersOrderDeleteDelete(id?: Array<string> | null): Promise<BooleanCodeResult> {
        return send({
            url: `/orders/order/delete`,
            method: 'DELETE',
            params: {
                id: id,
            },
        });
    }
    /**
     * 
     * @summary 生成入库二维码
     */
    public ordersShowredirectcodeGet(): Promise<void> {
        return send({
            url: `/orders/showredirectcode`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 生成入库二维码
     */
    public ordersShowstockadditionalGet(): Promise<void> {
        return send({
            url: `/orders/showstockadditional`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 更新入库前图片
     * @param UpdateBeforeStockImagesReq? updateBeforeStockImagesReq 
     */
    public ordersStockImagesPost(updateBeforeStockImagesReq?: UpdateBeforeStockImagesReq): Promise<BooleanCodeResult> {
        return send({
            url: `/orders/stock_images`,
            method: 'POST',
            body: updateBeforeStockImagesReq,
        });
    }
}

/**
 * SchoolOrderApi - instance
 */
export const SchoolOrderApiInstance = new SchoolOrderApi();

