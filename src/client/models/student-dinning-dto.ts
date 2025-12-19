/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { StudentDiningInfoWithStatus } from './student-dining-info-with-status';

export interface StudentDinningDto {
    'classId'?: string;
    'className'?: string | null;
    'students'?: Array<StudentDiningInfoWithStatus> | null;
}

