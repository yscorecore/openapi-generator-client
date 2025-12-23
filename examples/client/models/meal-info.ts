/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealMode } from './meal-mode';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeSpan } from './time-span';

export interface MealInfo {
    'kindType'?: MealKind;
    'isNutritious'?: boolean;
    'beginDate'?: TimeSpan;
    'mode'?: MealMode;
    'cardPayment'?: boolean;
}



