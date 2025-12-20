/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AllDataDtoCodeResult } from "../models"

/**
 * VisualDataApi - API class
 */
export class VisualDataApi {
    /**
     * 
     * @summary 监管平台的数据
     * @param number? day 从今天开始往前几天的数据
     * @param number? maxCount 告警数据条数
     */
    public visualdataAllGet(day?: number, maxCount?: number): Promise<AllDataDtoCodeResult> {
        return send({
            url: '/visualdata/All',
            method: 'GET',
            params: {
                day: day,
                maxCount: maxCount,
            },
        });
    }
}

/**
 * VisualDataApi - instance
 */
export const VisualDataApiInstance = new VisualDataApi();

