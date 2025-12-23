/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { DeepItemInfo } from "../models"
import type { InvoiceInfo } from "../models"
import type { MigrationInfo } from "../models"
import type { MonthStockInReportRecordPaginationData } from "../models"
import type { MonthSubmitInfo } from "../models"
import type { MonthSummaryDetailDto } from "../models"
import type { MonthSummaryDtoPaginationData } from "../models"
import type { MonthSummaryScope } from "../models"
import type { StockInfo } from "../models"

/**
 * SchoolMonth2Api - API class
 */
export class SchoolMonth2Api {
    /**
     * 
     * @summary 更新报账状态
     * @param string id 
     */
    public monthV2CompleteIdPost(id: string): Promise<boolean> {
        return send({
            url: '/month/v2/complete/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'POST',
        });
    }
    /**
     * 
     * @summary 深加工
     * @param string? stockInId 
     */
    public monthV2DeepItemsGet(stockInId?: string): Promise<Array<DeepItemInfo>> {
        return send({
            url: '/month/v2/deep-items',
            method: 'GET',
            params: {
                stockInId: stockInId,
            },
        });
    }
    /**
     * 
     * @summary 撤销
     * @param string id 
     */
    public monthV2IdDelete(id: string): Promise<boolean> {
        return send({
            url: '/month/v2/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取报账详情
     * @param string id 
     */
    public monthV2IdGet(id: string): Promise<MonthSummaryDetailDto> {
        return send({
            url: '/month/v2/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取报账核算
     * @param string? startDate 
     * @param string? endDate 
     * @param MonthSummaryScope? monthType 
     */
    public monthV2InvoicesGet(startDate?: string, endDate?: string, monthType?: MonthSummaryScope): Promise<Array<InvoiceInfo>> {
        return send({
            url: '/month/v2/invoices',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                MonthType: monthType,
            },
        });
    }
    /**
     * 
     * @summary 结算
     * @param string id 
     * @param Array<string>? requestBody 
     */
    public monthV2InvoicesIdPost(id: string, requestBody?: Array<string> | null): Promise<boolean> {
        return send({
            url: '/month/v2/invoices/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'POST',
            body: requestBody,
        });
    }
    /**
     * 
     * @summary 查询月度报账列表
     * @param number? offset 
     * @param number? limit 
     */
    public monthV2ListGet(offset?: number, limit?: number): Promise<MonthSummaryDtoPaginationData> {
        return send({
            url: '/month/v2/list',
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 更新月结信息
     * @param MigrationInfo? migrationInfo 
     */
    public monthV2MigrateToNewPost(migrationInfo?: MigrationInfo): Promise<boolean> {
        return send({
            url: '/month/v2/migrate-to-new',
            method: 'POST',
            body: migrationInfo,
        });
    }
    /**
     * 
     * @summary 月结入库报表
     * @param number? offset 
     * @param number? limit 
     */
    public monthV2StockinReportGet(offset?: number, limit?: number): Promise<MonthStockInReportRecordPaginationData> {
        return send({
            url: '/month/v2/stockin-report',
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 查询报账入库信息
     * @param string? startDate 
     * @param string? endDate 
     * @param MonthSummaryScope? monthType 
     */
    public monthV2StocksGet(startDate?: string, endDate?: string, monthType?: MonthSummaryScope): Promise<Array<StockInfo>> {
        return send({
            url: '/month/v2/stocks',
            method: 'GET',
            params: {
                StartDate: startDate,
                EndDate: endDate,
                MonthType: monthType,
            },
        });
    }
    /**
     * 
     * @summary 提交
     * @param MonthSubmitInfo? monthSubmitInfo 
     */
    public monthV2SubmitPost(monthSubmitInfo?: MonthSubmitInfo): Promise<string> {
        return send({
            url: '/month/v2/submit',
            method: 'POST',
            body: monthSubmitInfo,
        });
    }
}

/**
 * SchoolMonth2Api - instance
 */
export const SchoolMonth2ApiInstance = new SchoolMonth2Api();

