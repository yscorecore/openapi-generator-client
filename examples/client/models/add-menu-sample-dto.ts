/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface AddMenuSampleDto {
    'menuId'?: string | null;
    'menuName': string;
    'weight'?: number;
    'kind'?: MealKind;
    'imageUrl'?: string | null;
    'peeling'?: number;
    'perspectiveTransformation'?: boolean;
    'auditUser'?: string | null;
    'processingUser'?: string | null;
}



