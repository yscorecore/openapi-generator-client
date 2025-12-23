/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CheckType } from './check-type';

export interface DailyCheckDto {
    'id'?: string;
    'date'?: string;
    'userName'?: string | null;
    'imageUrl'?: string | null;
    'frontOfHandImageUrl'?: string | null;
    'temperature'?: number;
    'userId'?: string;
    'checkType'?: CheckType;
    'details'?: { [key: string]: boolean; } | null;
    'createTime'?: string;
    'passed'?: boolean;
    'checkTime'?: string;
    'checkCount'?: number;
    'earliestTime'?: string;
    'schoolName'?: string | null;
}



