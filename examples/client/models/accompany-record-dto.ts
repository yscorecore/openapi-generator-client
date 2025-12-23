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

export interface AccompanyRecordDto {
    'schoolName'?: string | null;
    'id'?: string;
    'date'?: string;
    'kind'?: MealKind;
    'leaderName'?: string | null;
    'userId'?: string | null;
    'comment'?: string | null;
    'suggestion'?: string | null;
    'isNutritious'?: boolean;
    'imageUrl'?: Array<string> | null;
    'accompanyKind'?: AccompanyKind;
    'createTime'?: string;
    'favoriteMealIds'?: Array<string> | null;
    'meals'?: Array<string> | null;
    'isPublic'?: boolean;
    'score'?: LeaderMealComment;
    'isAdditional'?: boolean;
}



