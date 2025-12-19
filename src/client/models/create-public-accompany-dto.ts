/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface CreatePublicAccompanyDto {
    'kind'?: MealKind;
    'userId'?: string | null;
    'userName': string;
    'imageUrl': Array<string>;
    'comment'?: string | null;
    'isAdditional'?: boolean;
}



