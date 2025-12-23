/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { FunctionAssignObjectInfo } from './function-assign-object-info';

export interface AssignByRoleInfo {
    'appId'?: string | null;
    'roleCode'?: string | null;
    'functionAssignments'?: { [key: string]: FunctionAssignObjectInfo; } | null;
}

