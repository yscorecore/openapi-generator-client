/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockOutItemListDto {
    'id'?: string;
    'startTime'?: string | null;
    'endTime'?: string | null;
    'receiveUser'?: string | null;
    'studentCount'?: number | null;
    'date'?: string;
    'allTotalPrice'?: number;
    'materialId'?: string;
    'videoCode'?: string | null;
    'imageUrl'?: Array<string> | null;
    'goodsAmount'?: number;
    'peelingAmount'?: number;
    'goodsName'?: string | null;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'materialType'?: number;
    'materialTypeName'?: string | null;
    'unit'?: UnitType;
    'isInMenu'?: boolean | null;
    'unitAmount'?: number | null;
    'stockAmount'?: number | null;
    'totalPrice'?: number;
    'createTime'?: string;
    'createUser'?: string | null;
    'kind'?: MealKind;
    'schoolId'?: string;
    'stockInItemCode'?: string | null;
    'isNutritious'?: boolean;
    'supplierName'?: string | null;
    'accompanyCount'?: number;
    'studentTotalPrice'?: number;
    'accompanyTotalPrice'?: number;
    'reviewer'?: string | null;
    'operatorName'?: string | null;
    'orderType'?: OrderType;
    'schoolName'?: string | null;
}



