/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ProdctionStatus } from './prodction-status';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockDetail {
    'id'?: string;
    'stockInItemCode'?: string | null;
    'materialId'?: string;
    'goodsName'?: string | null;
    'goodsUnit'?: string | null;
    'goodsPrice'?: number;
    'brand'?: string | null;
    'goodsAmount'?: number;
    'qgp'?: number | null;
    'qgpUnit'?: QgpUnit;
    'productDate'?: string | null;
    'stockOutAmount'?: number;
    'stockReturnAmount'?: number;
    'stockDeepAmount'?: number;
    'stockAmount'?: number;
    'lossAmout'?: number;
    'isCompleted'?: boolean;
    'isNearPassedGoods'?: boolean;
    'reasion'?: string | null;
    'auditUser'?: string | null;
    'auditCreateDate'?: string | null;
    'prodStatus'?: ProdctionStatus;
    'createTime'?: string;
    'startTime'?: string;
    'endTime'?: string;
    'totalPrice'?: number;
    'stockInDate'?: string;
    'videoCode'?: string | null;
    'certificateUrl'?: Array<string> | null;
    'materialFactor'?: number;
    'avgPriceUnit'?: UnitType;
    'normalizedPrice'?: number;
}



