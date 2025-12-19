/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ApplicableSeason } from './applicable-season';
// May contain unused imports in some cases
// @ts-ignore
import type { EditMealMaterialDto } from './edit-meal-material-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealType } from './meal-type';

export interface EditMealDto {
    'id'?: string;
    'name'?: string | null;
    'kind': Array<MealKind>;
    'mealMaterials': Array<EditMealMaterialDto>;
    'applicableSeasons': Array<ApplicableSeason>;
    'mealType'?: MealType;
}



