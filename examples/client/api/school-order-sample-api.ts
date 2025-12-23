/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AddSampleDto2 } from "../models"
import type { ImageBindInfo } from "../models"
import type { OrderSampleDtoPaginationData } from "../models"
import type { OrderSampleEntry } from "../models"
import type { OrderSampleTemplate } from "../models"
import type { OrderType } from "../models"

/**
 * SchoolOrderSampleApi - API class
 */
export class SchoolOrderSampleApi {
    /**
     * 
     * @summary 添加原材料留样
     * @param AddSampleDto2? addSampleDto2 
     */
    public orderSamplesAddPost(addSampleDto2?: AddSampleDto2): Promise<OrderSampleTemplate> {
        return send({
            url: '/order/samples/add',
            method: 'POST',
            body: addSampleDto2,
        });
    }
    /**
     * 
     * @summary 留样设置图片
     * @param ImageBindInfo? imageBindInfo 
     */
    public orderSamplesBindImagePost(imageBindInfo?: ImageBindInfo): Promise<boolean> {
        return send({
            url: '/order/samples/bind-image',
            method: 'POST',
            body: imageBindInfo,
        });
    }
    /**
     * 
     * @summary 重置原材料留样
     * @param string id 
     */
    public orderSamplesIdDelete(id: string): Promise<number> {
        return send({
            url: '/order/samples/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取原材料留样
     * @param string? startDate 
     * @param string? endDate 
     * @param OrderType? orderType 
     * @param string? materialName 
     * @param string? schoolId 
     * @param number? offset 
     * @param number? limit 
     */
    public orderSamplesListGet(startDate?: string | null, endDate?: string | null, orderType?: OrderType, materialName?: string | null, schoolId?: string | null, offset?: number, limit?: number): Promise<OrderSampleDtoPaginationData> {
        return send({
            url: '/order/samples/list',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                OrderType: orderType,
                MaterialName: materialName,
                SchoolId: schoolId,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 留样模板获取
     * @param string? date 
     */
    public orderSamplesTemplatesGet(date?: string | null): Promise<Array<OrderSampleEntry>> {
        return send({
            url: '/order/samples/templates',
            method: 'GET',
            params: {
                date: date,
            },
        });
    }
    /**
     * 
     * @summary 获取今日留样
     */
    public orderSamplesTodayGet(): Promise<Array<OrderSampleEntry>> {
        return send({
            url: '/order/samples/today',
            method: 'GET',
        });
    }
}

/**
 * SchoolOrderSampleApi - instance
 */
export const SchoolOrderSampleApiInstance = new SchoolOrderSampleApi();

