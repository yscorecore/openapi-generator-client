/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MenuNutritionInfoDetailDto } from './menu-nutrition-info-detail-dto';

export interface MenuNutritiousInfoDto {
    'menuNutritionInfoDetails'?: Array<MenuNutritionInfoDetailDto> | null;
    'referenceNutritionInfoDetails'?: Array<MenuNutritionInfoDetailDto> | null;
    'eligibility'?: number;
    'isEstimated'?: boolean;
}

