/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DiningCostDto } from './dining-cost-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { LeaderMealDto } from './leader-meal-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { LossRedordDto } from './loss-redord-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { ReportDto } from './report-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { StockOutDto } from './stock-out-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { StudentDinningDto } from './student-dinning-dto';

export interface DiningOutDetailsDto {
    'id'?: string;
    'date'?: string;
    'kind'?: MealKind;
    'isNutritious'?: boolean;
    'totalCount'?: number;
    'summary'?: DiningCostDto;
    'schoolName'?: string | null;
    'schoolId'?: string;
    'studentDinnings'?: Array<StudentDinningDto> | null;
    'leaderMeals'?: Array<LeaderMealDto> | null;
    'stockOuts'?: Array<StockOutDto> | null;
    'reports'?: Array<ReportDto> | null;
    'lossRecords'?: Array<LossRedordDto> | null;
}



