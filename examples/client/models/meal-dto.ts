/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ApplicableSeason } from './applicable-season';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealMaterialDto } from './meal-material-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MealType } from './meal-type';

export interface MealDto {
    'id'?: string;
    'name'?: string | null;
    'kind'?: Array<MealKind> | null;
    'mealMaterials'?: Array<MealMaterialDto> | null;
    'applicableSeasons'?: Array<ApplicableSeason> | null;
    'mealType'?: MealType;
    'favoriteCount'?: number;
    'isManaged'?: boolean;
    'estimatePrice'?: number | null;
}



