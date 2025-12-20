/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { SchoolNvrRunLogPaginationDataCodeResult } from "../models"

/**
 * SchoolNvrRunLogApi - API class
 */
export class SchoolNvrRunLogApi {
    /**
     * 
     * @summary 获取nvr日志
     * @param string? nvrCode 
     * @param string? startDate 
     * @param string? endDate 
     * @param number? offset 
     * @param number? limit 
     */
    public nvrrunlogSchoolNvrrunlogGet(nvrCode?: string | null, startDate?: string | null, endDate?: string | null, offset?: number, limit?: number): Promise<SchoolNvrRunLogPaginationDataCodeResult> {
        return send({
            url: '/nvrrunlog/school/nvrrunlog',
            method: 'GET',
            params: {
                NvrCode: nvrCode,
                StartDate: startDate,
                EndDate: endDate,
                Offset: offset,
                Limit: limit,
            },
        });
    }
}

/**
 * SchoolNvrRunLogApi - instance
 */
export const SchoolNvrRunLogApiInstance = new SchoolNvrRunLogApi();

