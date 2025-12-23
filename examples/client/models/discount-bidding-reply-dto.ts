/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SupplierDto } from './supplier-dto';

export interface DiscountBiddingReplyDto {
    'id'?: string;
    'discount'?: number;
    'createTime'?: string;
    'supplier'?: SupplierDto;
    'isWon'?: boolean;
    'supplierId'?: string;
    'imageUrl'?: Array<string> | null;
}

