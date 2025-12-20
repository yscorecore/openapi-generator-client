/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AreaInfoListCodeResult } from "../models"
import type { BooleanCodeResult } from "../models"
import type { FreeSchoolDto } from "../models"

/**
 * FreeSchoolApi - API class
 */
export class FreeSchoolApi {
    /**
     * 
     * @summary 获取所有的免费区域
     */
    public freeAreasGet(): Promise<AreaInfoListCodeResult> {
        return send({
            url: '/free/areas',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 注册免费的学校
     * @param FreeSchoolDto? freeSchoolDto 
     */
    public freeRegisterPost(freeSchoolDto?: FreeSchoolDto): Promise<BooleanCodeResult> {
        return send({
            url: '/free/register',
            method: 'POST',
            body: freeSchoolDto,
        });
    }
    /**
     * 
     * @summary 二维码
     * @param boolean? isHyaline 
     */
    public freeShowcodeGet(isHyaline?: boolean): Promise<void> {
        return send({
            url: '/free/showcode',
            method: 'GET',
            params: {
                is_hyaline: isHyaline,
            },
        });
    }
}

/**
 * FreeSchoolApi - instance
 */
export const FreeSchoolApiInstance = new FreeSchoolApi();

