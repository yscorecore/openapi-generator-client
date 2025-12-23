/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AccompanyKind } from './accompany-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface LeaderMealDto1 {
    'date'?: string;
    'kind'?: MealKind;
    'leaderName'?: string | null;
    'imageUrl'?: Array<string> | null;
    'accompanyKind'?: AccompanyKind;
}



