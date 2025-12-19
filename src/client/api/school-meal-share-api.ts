/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AddAccompanyDto } from "../models"
import type { AddMenuDto } from "../models"
import type { DaliyMealShareDtoCodeResult } from "../models"
import type { GuidCodeResult } from "../models"

/**
 * SchoolMealShareApi - API class
 */
export class SchoolMealShareApi {
    /**
     * 
     * @summary 新增陪餐
     * @param AddAccompanyDto? addAccompanyDto 
     */
    public shareAddAccompanyPost(addAccompanyDto?: AddAccompanyDto): Promise<GuidCodeResult> {
        return send({
            url: `/share/add-accompany`,
            method: 'POST',
            body: addAccompanyDto,
        });
    }
    /**
     * 
     * @summary 新增食谱
     * @param AddMenuDto? addMenuDto 
     */
    public shareAddMenuPost(addMenuDto?: AddMenuDto): Promise<GuidCodeResult> {
        return send({
            url: `/share/add-menu`,
            method: 'POST',
            body: addMenuDto,
        });
    }
    /**
     * 
     * @summary 获取今日陪餐信息
     */
    public shareTodayGet(): Promise<DaliyMealShareDtoCodeResult> {
        return send({
            url: `/share/today`,
            method: 'GET',
        });
    }
}

/**
 * SchoolMealShareApi - instance
 */
export const SchoolMealShareApiInstance = new SchoolMealShareApi();

