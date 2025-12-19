/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { BenefitStudentDto } from './benefit-student-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolYearSession } from './school-year-session';

export interface BenefitStudentBatchDto {
    'id'?: string;
    'batchCode'?: string | null;
    'createTime'?: string;
    'totalCount'?: number;
    'schoolYear'?: number;
    'schoolYearSession'?: SchoolYearSession;
    'students'?: Array<BenefitStudentDto> | null;
}



