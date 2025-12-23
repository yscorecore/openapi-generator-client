/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AreaInfo1 } from './area-info1';
// May contain unused imports in some cases
// @ts-ignore
import type { MealInfoModel } from './meal-info-model';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MenuImageModel } from './menu-image-model';
// May contain unused imports in some cases
// @ts-ignore
import type { PurchaseKind } from './purchase-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolKind } from './school-kind';

export interface SchoolWithMealInfoModel {
    'id'?: string;
    'area'?: AreaInfo1;
    'code'?: string | null;
    'name'?: string | null;
    'purchaseKind'?: PurchaseKind;
    'showVideo'?: boolean;
    'showTopic'?: boolean;
    'nutritiousMeal'?: MealKind;
    'hasNutritious'?: boolean;
    'hasNonNutritious'?: boolean;
    'kind'?: SchoolKind;
    'autoSendDailyOrder'?: boolean;
    'autoSendSafeOrder'?: boolean;
    'mealInfos'?: Array<MealInfoModel> | null;
    'healthes'?: Array<string> | null;
    'qualifications'?: Array<string> | null;
    'benefitStudentCount'?: number;
    'stockInOrderCount'?: number;
    'stockInOrderTotalPrice'?: number;
    'stockInOrderNutritiousTotalPrice'?: number;
    'stockInOrderNonNutritiousTotalPrice'?: number;
    'stockInOrderMixedTotalPrice'?: number;
    'stockOutOrderCount'?: number;
    'stockOutOrderTotalPrice'?: number;
    'internalCount'?: number;
    'externalCount'?: number;
    'dailyCheckPassedCount'?: number;
    'dailyCheckUnPassedCount'?: number;
    'menuSampleCount'?: number;
    'orderSampleCount'?: number;
    'stockOutOrderAvgPrice'?: number;
    'score'?: number;
    'maxScore'?: number;
    'menuImages'?: Array<MenuImageModel> | null;
    'latestBenefitStudentBatchId'?: string | null;
    'stockReturnTotalPrice'?: number;
    'stockReturnCount'?: number;
    'deepProcessingTotalPrice'?: number;
    'deepProcessingCount'?: number;
}



