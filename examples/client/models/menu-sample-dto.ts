/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface MenuSampleDto {
    'id'?: string;
    'createTime'?: string;
    'destroyTime'?: string;
    'createUser'?: string | null;
    'imageUrl'?: string | null;
    'date'?: string;
    'weight'?: number;
    'menuId'?: string | null;
    'menuName'?: string | null;
    'kind'?: MealKind;
    'isNutritious'?: boolean;
    'schoolName'?: string | null;
    'actualDestroyTime'?: string | null;
    'actualDestroyUser'?: string | null;
    'processingUser'?: string | null;
}



