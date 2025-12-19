/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { SchoolImageStatus } from './school-image-status';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolImageType } from './school-image-type';

export interface ImageInfo {
    'id'?: string;
    'name'?: string | null;
    'url'?: string | null;
    'expiringDate'?: string | null;
    'createTime'?: string;
    'category'?: SchoolImageType;
    'status'?: SchoolImageStatus;
}



