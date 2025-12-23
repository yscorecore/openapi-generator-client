/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { DataSourceInfo } from './data-source-info';
// May contain unused imports in some cases
// @ts-ignore
import type { QueryFilterInfo } from './query-filter-info';

export interface MetadataClolumnInfo {
    'propertyPath'?: string | null;
    'displayName'?: string | null;
    'description'?: string | null;
    'showForDisplay'?: boolean;
    'displayFormat'?: string | null;
    'isArray'?: boolean;
    'dataTypeName'?: string | null;
    'displayOrder'?: number;
    'dataSource'?: DataSourceInfo;
    'queryFilter'?: QueryFilterInfo;
}

