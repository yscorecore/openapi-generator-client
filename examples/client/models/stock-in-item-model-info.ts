/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';
// May contain unused imports in some cases
// @ts-ignore
import type { ProdctionStatus } from './prodction-status';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockInItemModelInfo {
    'id'?: string;
    'stockInItemCode'?: string | null;
    'stockInDate'?: string;
    'stockInSupplierName'?: string | null;
    'orderItemId'?: string;
    'stockInId'?: string;
    'materialId'?: string;
    'goodsName'?: string | null;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'goodsAmount'?: number;
    'peelingAmount'?: number;
    'weight'?: number | null;
    'brand'?: string | null;
    'qgp'?: number;
    'productDate'?: string;
    'materialType'?: number;
    'unit'?: UnitType;
    'totalPrice'?: number;
    'certificateUrl'?: Array<string> | null;
    'isCompleted'?: boolean;
    'reasion'?: string | null;
    'status'?: ProdctionStatus;
    'completeUser'?: string | null;
    'completeTime'?: string | null;
    'createUser'?: string | null;
    'stockOutAmount'?: number;
    'stockReturnAmount'?: number;
    'stockDeepAmount'?: number;
    'restAmount'?: number;
    'restPrice'?: number;
    'stockLossAmount'?: number;
    'stockLossPrice'?: number;
    'attritionRate'?: number;
    'materialFactor'?: number;
    'avgPriceUnit'?: UnitType;
    'normalizedPrice'?: number;
    'stockInOrderOrderType'?: OrderType;
}



