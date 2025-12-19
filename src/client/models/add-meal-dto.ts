/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AddMealMaterialDto } from './add-meal-material-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { ApplicableSeason } from './applicable-season';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealType } from './meal-type';

export interface AddMealDto {
    'name': string;
    'kind': Array<MealKind>;
    'mealMaterials': Array<AddMealMaterialDto>;
    'applicableSeasons'?: Array<ApplicableSeason> | null;
    'mealType'?: MealType;
}



