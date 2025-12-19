/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { ChildrenSchoolDtoListCodeResult } from "../models"
import type { CodeResult } from "../models"
import type { Detail } from "../models"
import type { DetailCodeResult } from "../models"
import type { Int32CodeResult } from "../models"
import type { SchoolConfigForAreaSchoolDtoCodeResult } from "../models"
import type { UserLoginInfoCodeResult } from "../models"

/**
 * SchoolApi - API class
 */
export class SchoolApi {
    /**
     * 
     * @summary 获取子组织
     */
    public schoolChildrenSchoolGet(): Promise<ChildrenSchoolDtoListCodeResult> {
        return send({
            url: `/school/childrenSchool`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取学校配置
     */
    public schoolConfigGet(): Promise<SchoolConfigForAreaSchoolDtoCodeResult> {
        return send({
            url: `/school/config`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 修改学校配置
     * @param { [key: string]: any; }? requestBody 
     */
    public schoolConfigPost(requestBody?: { [key: string]: any; } | null): Promise<Int32CodeResult> {
        return send({
            url: `/school/config`,
            method: 'POST',
            body: requestBody,
        });
    }
    /**
     * 
     * @summary 获取学校详情
     */
    public schoolDetailGet(): Promise<DetailCodeResult> {
        return send({
            url: `/school/detail`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 保存学校详情
     * @param Detail? detail 
     */
    public schoolDetailPost(detail?: Detail): Promise<CodeResult> {
        return send({
            url: `/school/detail`,
            method: 'POST',
            body: detail,
        });
    }
    /**
     * 
     * @summary 获取当前用户登录信息
     */
    public schoolLoginInfoGet(): Promise<UserLoginInfoCodeResult> {
        return send({
            url: `/school/loginInfo`,
            method: 'GET',
        });
    }
}

/**
 * SchoolApi - instance
 */
export const SchoolApiInstance = new SchoolApi();

