/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { MenuSampleInfo } from './menu-sample-info';

export interface SamplePositionInfo {
    'id'?: string;
    'name'?: string | null;
    'index'?: number;
    'lockTime'?: string | null;
    'lockUser'?: string | null;
    'date'?: string | null;
    'kind'?: MealKind;
    'samples'?: Array<MenuSampleInfo> | null;
    'locked'?: boolean;
}



