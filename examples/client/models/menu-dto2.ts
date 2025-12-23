/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MenuDetailDto2 } from './menu-detail-dto2';

export interface MenuDto2 {
    'id'?: string;
    'date'?: string;
    'kind'?: MealKind;
    'name'?: string | null;
    'isNutritious'?: boolean;
    'menuDetail'?: Array<MenuDetailDto2> | null;
    'mealId'?: string | null;
    'imageUrl'?: string | null;
    'isManaged'?: boolean;
    'favoriteCount'?: number;
    'planedCount'?: number | null;
    'hideInPublic'?: boolean;
}



