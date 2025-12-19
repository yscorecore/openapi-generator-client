/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { AddRoleInfo } from "../models"
import type { CodeResult } from "../models"
import type { GuidCodeResult } from "../models"
import type { RoleInfoCodeResult } from "../models"
import type { RoleInfoPaginationDataCodeResult } from "../models"
import type { UpdateRoleInfo } from "../models"

/**
 * SchoolRoleApi - API class
 */
export class SchoolRoleApi {
    /**
     * 
     * @summary 获取学校的岗位
     * @param string? name 
     * @param number? offset 
     * @param number? limit 
     */
    public schoolrolesGet(name?: string | null, offset?: number, limit?: number): Promise<RoleInfoPaginationDataCodeResult> {
        return send({
            url: `/schoolroles`,
            method: 'GET',
            params: {
                Name: name,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 删除岗位
     * @param string id 
     */
    public schoolrolesIdDelete(id: string): Promise<CodeResult> {
        return send({
            url: `/schoolroles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取单个的岗位
     * @param string id 
     */
    public schoolrolesIdGet(id: string): Promise<RoleInfoCodeResult> {
        return send({
            url: `/schoolroles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 删除岗位
     * @param string id 
     * @param UpdateRoleInfo? updateRoleInfo 
     */
    public schoolrolesIdPut(id: string, updateRoleInfo?: UpdateRoleInfo): Promise<CodeResult> {
        return send({
            url: `/schoolroles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'PUT',
            body: updateRoleInfo,
        });
    }
    /**
     * 
     * @summary 新增岗位
     * @param AddRoleInfo? addRoleInfo 
     */
    public schoolrolesPost(addRoleInfo?: AddRoleInfo): Promise<GuidCodeResult> {
        return send({
            url: `/schoolroles`,
            method: 'POST',
            body: addRoleInfo,
        });
    }
}

/**
 * SchoolRoleApi - instance
 */
export const SchoolRoleApiInstance = new SchoolRoleApi();

