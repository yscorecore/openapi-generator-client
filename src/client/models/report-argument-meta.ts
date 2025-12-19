/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DbType } from './db-type';

export interface ReportArgumentMeta {
    'name'?: string | null;
    'description'?: string | null;
    'type'?: DbType;
    'defaultValue'?: any | null;
    'hidden'?: boolean;
    'allowNull'?: boolean;
}



