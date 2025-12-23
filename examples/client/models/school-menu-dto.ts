/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MenuDetailDto } from './menu-detail-dto';

export interface SchoolMenuDto {
    'menuId'?: string;
    'date'?: string;
    'kind'?: MealKind;
    'isNutritious'?: boolean;
    'mealName'?: string | null;
    'imageUrl'?: string | null;
    'mealId'?: string | null;
    'mealMaterials'?: Array<MenuDetailDto> | null;
    'isManaged'?: boolean;
    'planedCount'?: number | null;
    'hideInPublic'?: boolean;
}



