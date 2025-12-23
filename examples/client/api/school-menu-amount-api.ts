/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { MaterialAmountInfo } from "../models"
import type { MaterialAmountInfo2 } from "../models"
import type { MaterialAmountWithSpcesDto } from "../models"
import type { MealWithDate3 } from "../models"

/**
 * SchoolMenuAmountApi - API class
 */
export class SchoolMenuAmountApi {
    /**
     * 
     * @summary 获取食材人均带量
     * @param MaterialAmountInfo? materialAmountInfo 
     */
    public menuMaterialAmountPost(materialAmountInfo?: MaterialAmountInfo): Promise<Array<MaterialAmountWithSpcesDto>> {
        return send({
            url: '/menu/material_amount',
            method: 'POST',
            body: materialAmountInfo,
        });
    }
    /**
     * 
     * @summary 获取食材人均带量 v2
     * @param MaterialAmountInfo2? materialAmountInfo2 
     */
    public menuMaterialAmountV2Post(materialAmountInfo2?: MaterialAmountInfo2): Promise<Array<MaterialAmountWithSpcesDto>> {
        return send({
            url: '/menu/material_amount/v2',
            method: 'POST',
            body: materialAmountInfo2,
        });
    }
    /**
     * 
     * @summary 获取食材人均带量v3
     * @param Array<MealWithDate3>? mealWithDate3 
     */
    public menuMaterialAmountV3Post(mealWithDate3?: Array<MealWithDate3> | null): Promise<Array<MaterialAmountWithSpcesDto>> {
        return send({
            url: '/menu/material_amount/v3',
            method: 'POST',
            body: mealWithDate3,
        });
    }
}

/**
 * SchoolMenuAmountApi - instance
 */
export const SchoolMenuAmountApiInstance = new SchoolMenuAmountApi();

