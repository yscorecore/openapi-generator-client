/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { ChildrenSchoolDto } from "../models"
import type { Detail } from "../models"
import type { SchoolConfigForAreaSchoolDto } from "../models"
import type { UserLoginInfo } from "../models"

/**
 * SchoolApi - API class
 */
export class SchoolApi {
    /**
     * 
     * @summary 获取子组织
     */
    public schoolChildrenSchoolGet(): Promise<Array<ChildrenSchoolDto>> {
        return send({
            url: '/school/childrenSchool',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取学校配置
     */
    public schoolConfigGet(): Promise<SchoolConfigForAreaSchoolDto> {
        return send({
            url: '/school/config',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 修改学校配置
     * @param { [key: string]: any; }? requestBody 
     */
    public schoolConfigPost(requestBody?: { [key: string]: any; } | null): Promise<number> {
        return send({
            url: '/school/config',
            method: 'POST',
            body: requestBody,
        });
    }
    /**
     * 
     * @summary 获取学校详情
     */
    public schoolDetailGet(): Promise<Detail> {
        return send({
            url: '/school/detail',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 保存学校详情
     * @param Detail? detail 
     */
    public schoolDetailPost(detail?: Detail): Promise<void> {
        return send({
            url: '/school/detail',
            method: 'POST',
            body: detail,
        });
    }
    /**
     * 
     * @summary 获取当前用户登录信息
     */
    public schoolLoginInfoGet(): Promise<UserLoginInfo> {
        return send({
            url: '/school/loginInfo',
            method: 'GET',
        });
    }
}

/**
 * SchoolApi - instance
 */
export const SchoolApiInstance = new SchoolApi();

