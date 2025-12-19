/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { FunctionAssignLayerValue } from './function-assign-layer-value';

export interface FunctionMockTreeInfo {
    'code'?: string | null;
    'name'?: string | null;
    'description'?: string | null;
    'type'?: string | null;
    'parentCode'?: string | null;
    'sequence'?: number;
    'parentVisible'?: boolean;
    'nodeVisible'?: boolean;
    'visible'?: boolean;
    'assignLayers'?: Array<FunctionAssignLayerValue> | null;
}

