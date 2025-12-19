/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ApplicableSeason } from './applicable-season';
// May contain unused imports in some cases
// @ts-ignore
import type { MainDishInfo } from './main-dish-info';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface DishRequestInfo {
    'kind'?: MealKind;
    'season'?: ApplicableSeason;
    'maxAvgCost'?: number;
    'minAvgCost'?: number;
    'mainDishConfig': Array<MainDishInfo>;
}



