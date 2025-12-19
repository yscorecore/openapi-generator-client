/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AddMenuSampleDto1 } from "../models"
import type { CodeResult } from "../models"
import type { EventInfo } from "../models"
import type { ForceUnLockInfo } from "../models"
import type { Int32MenuSampleTemplateListDictionaryCodeResult1 } from "../models"
import type { MenuSampleTemplateCodeResult1 } from "../models"
import type { SamplePositionInfoListCodeResult } from "../models"
import type { UserInfoListCodeResult } from "../models"

/**
 * SchoolSamplePositionApi - API class
 */
export class SchoolSamplePositionApi {
    /**
     * 
     * @summary 留样菜品
     * @param AddMenuSampleDto1? addMenuSampleDto1 
     */
    public samplePositionAddSamplePost(addMenuSampleDto1?: AddMenuSampleDto1): Promise<MenuSampleTemplateCodeResult1> {
        return send({
            url: `/sample-position/add-sample`,
            method: 'POST',
            body: addMenuSampleDto1,
        });
    }
    /**
     * 
     * @summary 撤销留样
     * @param string id 
     */
    public samplePositionDeleteSampleIdDelete(id: string): Promise<CodeResult> {
        return send({
            url: `/sample-position/delete-sample/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 强制打开柜子
     * @param ForceUnLockInfo? forceUnLockInfo 
     */
    public samplePositionForceUnlockPost(forceUnLockInfo?: ForceUnLockInfo): Promise<CodeResult> {
        return send({
            url: `/sample-position/force-unlock`,
            method: 'POST',
            body: forceUnLockInfo,
        });
    }
    /**
     * 
     * @summary 获取所有的仓位
     */
    public samplePositionListAllGet(): Promise<SamplePositionInfoListCodeResult> {
        return send({
            url: `/sample-position/list-all`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取所有的用户
     */
    public samplePositionListUsersGet(): Promise<UserInfoListCodeResult> {
        return send({
            url: `/sample-position/list-users`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 锁柜并开始留样
     * @param EventInfo? eventInfo 
     */
    public samplePositionLockPost(eventInfo?: EventInfo): Promise<CodeResult> {
        return send({
            url: `/sample-position/lock`,
            method: 'POST',
            body: eventInfo,
        });
    }
    /**
     * 
     * @summary 查询当天的菜品
     */
    public samplePositionQueryTodayGet(): Promise<Int32MenuSampleTemplateListDictionaryCodeResult1> {
        return send({
            url: `/sample-position/query-today`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 开柜并弃样
     * @param EventInfo? eventInfo 
     */
    public samplePositionUnlockPost(eventInfo?: EventInfo): Promise<CodeResult> {
        return send({
            url: `/sample-position/unlock`,
            method: 'POST',
            body: eventInfo,
        });
    }
}

/**
 * SchoolSamplePositionApi - instance
 */
export const SchoolSamplePositionApiInstance = new SchoolSamplePositionApi();

