/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { LossRecordDto } from './loss-record-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { StockOutItemDto } from './stock-out-item-dto';

export interface DinningOutDto {
    'id'?: string;
    'date'?: string;
    'mealKind'?: MealKind;
    'stockOutTotalPrice'?: number;
    'lossTotalPrice'?: number;
    'totalCount'?: number;
    'costTotalPrice'?: number;
    'costPerPerson'?: number;
    'isNutritious'?: boolean;
    'stockOutItems'?: Array<StockOutItemDto> | null;
    'lossRecords'?: Array<LossRecordDto> | null;
}



