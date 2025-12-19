/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AccompanyKind } from './accompany-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { LeaderMealComment } from './leader-meal-comment';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface CreateAccompanyDto {
    'kind'?: MealKind;
    'userId'?: string;
    'date': string;
    'suggestion'?: string | null;
    'favoriteMealIds'?: Array<string> | null;
    'score'?: LeaderMealComment;
    'isAdditional'?: boolean;
    'accompanyKind'?: AccompanyKind;
}



