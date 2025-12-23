/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AccompanyKind } from './accompany-kind';

export interface LeaderMealDto {
    'id'?: string;
    'leaderName'?: string | null;
    'userId'?: string | null;
    'comment'?: string | null;
    'suggestion'?: string | null;
    'imageUrl'?: Array<string> | null;
    'accompanyKind'?: AccompanyKind;
    'isAdditional'?: boolean;
    'isPublic'?: boolean;
}



