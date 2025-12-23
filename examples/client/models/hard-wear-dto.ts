/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { HardwareCompany } from './hardware-company';

export interface HardWearDto {
    'schoolId'?: string;
    'hardwareCode'?: string | null;
    'hardType'?: string | null;
    'config'?: string | null;
    'lastActiveTime'?: string | null;
    'company'?: HardwareCompany;
}



