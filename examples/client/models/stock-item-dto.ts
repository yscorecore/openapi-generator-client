/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { OrderChannel } from './order-channel';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderSource } from './order-source';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';
// May contain unused imports in some cases
// @ts-ignore
import type { QgpUnit } from './qgp-unit';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitType } from './unit-type';

export interface StockItemDto {
    'id'?: string;
    'orderType'?: OrderType;
    'goodsName'?: string | null;
    'goodsUnit'?: string | null;
    'qgp'?: number;
    'qgpUnit'?: QgpUnit;
    'brand'?: string | null;
    'supplierId'?: string | null;
    'supplierName'?: string | null;
    'goodsPrice'?: number;
    'supplies'?: number | null;
    'goodsAmount'?: number;
    'actualPrice'?: number;
    'peelingAmount'?: number;
    'operatorName'?: string | null;
    'commitDate'?: string | null;
    'imageUrl'?: Array<string> | null;
    'startTime'?: string | null;
    'productionDate'?: string | null;
    'hasCertificate'?: boolean;
    'totalPrice'?: number;
    'certificateUrl'?: Array<string> | null;
    'productDate'?: string | null;
    'videoCode'?: string | null;
    'stockInItemCode'?: string | null;
    'schoolId'?: string;
    'createTime'?: string;
    'orderId'?: string;
    'orderItemSuppliesAmount'?: number | null;
    'orderItemUnitPrice'?: number | null;
    'orderPlanChannel'?: OrderChannel;
    'date'?: string;
    'certificate'?: Array<string> | null;
    'orderSource'?: OrderSource;
    'materialFactor'?: number;
    'avgPriceUnit'?: UnitType;
    'normalizedPrice'?: number;
    'stockInId'?: string;
    'buyer'?: string | null;
    'reviewer'?: string | null;
    'materialType'?: number;
    'materialTypeName'?: string | null;
    'materialId'?: string;
    'needPay'?: boolean;
    'schoolName'?: string | null;
}



