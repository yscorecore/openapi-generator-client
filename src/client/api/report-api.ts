/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { ExcelPreviewInfoCodeResult } from "../models"
import type { ReportMetaCodeResult } from "../models"

/**
 * ReportApi - API class
 */
export class ReportApi {
    /**
     * 
     * @param string templateName 
     * @param string? title 
     */
    public reportExportExcelGet(templateName: string, title?: string | null): Promise<void> {
        return send({
            url: '/report/export-excel',
            method: 'GET',
            params: {
                templateName: templateName,
                title: title,
            },
        });
    }
    /**
     * 
     * @param string templateName 
     */
    public reportMetaGet(templateName: string): Promise<ReportMetaCodeResult> {
        return send({
            url: '/report/meta',
            method: 'GET',
            params: {
                templateName: templateName,
            },
        });
    }
    /**
     * 
     * @param string templateName 
     * @param string? title 
     */
    public reportPreviewGet(templateName: string, title?: string | null): Promise<ExcelPreviewInfoCodeResult> {
        return send({
            url: '/report/preview',
            method: 'GET',
            params: {
                templateName: templateName,
                title: title,
            },
        });
    }
    /**
     * 
     * @param string url 
     * @param string? title 
     */
    public reportPreviewUrlGet(url: string, title?: string | null): Promise<ExcelPreviewInfoCodeResult> {
        return send({
            url: '/report/preview-url',
            method: 'GET',
            params: {
                url: url,
                title: title,
            },
        });
    }
}

/**
 * ReportApi - instance
 */
export const ReportApiInstance = new ReportApi();

