/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BuinessReportStatus } from "../models"
import type { CreateReport } from "../models"
import type { EditReport } from "../models"
import type { QueryReportDtoPaginationData } from "../models"

/**
 * SchoolBuinessReportApi - API class
 */
export class SchoolBuinessReportApi {
    /**
     * 
     * @param BuinessReportStatus? status 
     * @param string? startDate 
     * @param string? endDate 
     * @param string? typeName 
     * @param number? offset 
     * @param number? limit 
     */
    public apiSchoolBuinessReportGet(status?: BuinessReportStatus, startDate?: string | null, endDate?: string | null, typeName?: string | null, offset?: number, limit?: number): Promise<QueryReportDtoPaginationData> {
        return send({
            url: '/api/SchoolBuinessReport',
            method: 'GET',
            params: {
                Status: status,
                StartDate: startDate,
                EndDate: endDate,
                TypeName: typeName,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @param CreateReport? createReport 
     */
    public apiSchoolBuinessReportPost(createReport?: CreateReport): Promise<void> {
        return send({
            url: '/api/SchoolBuinessReport',
            method: 'POST',
            body: createReport,
        });
    }
    /**
     * 
     * @param EditReport? editReport 
     */
    public apiSchoolBuinessReportPut(editReport?: EditReport): Promise<void> {
        return send({
            url: '/api/SchoolBuinessReport',
            method: 'PUT',
            body: editReport,
        });
    }
}

/**
 * SchoolBuinessReportApi - instance
 */
export const SchoolBuinessReportApiInstance = new SchoolBuinessReportApi();

