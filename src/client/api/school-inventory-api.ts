/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { CompleteInfo } from "../models"
import type { DinnerOutDto } from "../models"
import type { InventoryStatus } from "../models"
import type { StockInventoryInfo } from "../models"

/**
 * SchoolInventoryApi - API class
 */
export class SchoolInventoryApi {
    /**
     * 
     * @param string stockInItemId 
     */
    public inventoryAvailableDiningOutsStockInItemIdGet(stockInItemId: string): Promise<Array<DinnerOutDto>> {
        return send({
            url: '/inventory/available-diningOuts/{stockInItemId}'
                .replace(`{${"stockInItemId"}}`, encodeURIComponent(String(stockInItemId))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 人工盘点
     * @param Array<CompleteInfo>? completeInfo 
     */
    public inventoryCompletePost(completeInfo?: Array<CompleteInfo> | null): Promise<CodeResult> {
        return send({
            url: '/inventory/complete',
            method: 'POST',
            body: completeInfo,
        });
    }
    /**
     * 
     * @summary 获取食材批次的状态
     * @param string id 
     */
    public inventoryIdGet(id: string): Promise<InventoryStatus> {
        return send({
            url: '/inventory/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param Array<string>? id 
     */
    public inventoryNearlyGet(id?: Array<string> | null): Promise<Array<StockInventoryInfo>> {
        return send({
            url: '/inventory/nearly',
            method: 'GET',
            params: {
                id: id,
            },
        });
    }
    /**
     * 
     * @summary 撤销盘点
     * @param string id 
     */
    public inventoryRevertIdPost(id: string): Promise<CodeResult> {
        return send({
            url: '/inventory/revert/{id}'
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'POST',
        });
    }
}

/**
 * SchoolInventoryApi - instance
 */
export const SchoolInventoryApiInstance = new SchoolInventoryApi();

