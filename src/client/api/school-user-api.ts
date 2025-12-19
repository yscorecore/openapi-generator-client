/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { EditUserDto } from "../models"
import type { EditUserInfo } from "../models"
import type { EmptySchoolInfoListCodeResult } from "../models"
import type { FirstUserInfo } from "../models"
import type { GuidCodeResult } from "../models"
import type { QrCodeImageCodeResult } from "../models"
import type { RegisterUserDto } from "../models"
import type { StringCodeResult } from "../models"
import type { UserInfo1 } from "../models"
import type { UserInfoListCodeResult1 } from "../models"

/**
 * SchoolUserApi - API class
 */
export class SchoolUserApi {
    /**
     * 
     * @summary 添加收个用户
     * @param FirstUserInfo? firstUserInfo 
     */
    public schooluserAddFirstUserPost(firstUserInfo?: FirstUserInfo): Promise<GuidCodeResult> {
        return send({
            url: `/schooluser/add-first-user`,
            method: 'POST',
            body: firstUserInfo,
        });
    }
    /**
     * 
     * @param EditUserInfo? editUserInfo 
     */
    public schooluserChangeChildrenOrgVisiblePost(editUserInfo?: EditUserInfo): Promise<CodeResult> {
        return send({
            url: `/schooluser/changeChildrenOrgVisible`,
            method: 'POST',
            body: editUserInfo,
        });
    }
    /**
     * 
     * @summary 获取三月内创建的新学校
     * @param string areaCode 
     */
    public schooluserEmptySchoolsGet(areaCode: string): Promise<EmptySchoolInfoListCodeResult> {
        return send({
            url: `/schooluser/empty-schools`,
            method: 'GET',
            params: {
                areaCode: areaCode,
            },
        });
    }
    /**
     * 
     * @param string? currentSchoolCode 
     * @param string? currentSchoolName 
     * @param string? userName 
     * @param string? userNo 
     * @param number? userRole 
     */
    public schooluserFinanceSystemGet(currentSchoolCode?: string | null, currentSchoolName?: string | null, userName?: string | null, userNo?: string | null, userRole?: number): Promise<StringCodeResult> {
        return send({
            url: `/schooluser/financeSystem`,
            method: 'GET',
            params: {
                CurrentSchoolCode: currentSchoolCode,
                CurrentSchoolName: currentSchoolName,
                UserName: userName,
                UserNo: userNo,
                UserRole: userRole,
            },
        });
    }
    /**
     * 
     * @summary 验货机删除用户
     * @param string id 
     */
    public schooluserIdDelete(id: string): Promise<CodeResult> {
        return send({
            url: `/schooluser/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 验货机修改用户
     * @param string id 
     * @param EditUserDto? editUserDto 
     */
    public schooluserIdPut(id: string, editUserDto?: EditUserDto): Promise<CodeResult> {
        return send({
            url: `/schooluser/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'PUT',
            body: editUserDto,
        });
    }
    /**
     * 
     * @summary 获取所有的用户
     */
    public schooluserListGet(): Promise<UserInfoListCodeResult1> {
        return send({
            url: `/schooluser/list`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取新申请的用户
     * @param string? sence 
     */
    public schooluserNewusersGet(sence?: string | null): Promise<UserInfoListCodeResult1> {
        return send({
            url: `/schooluser/newusers`,
            method: 'GET',
            params: {
                sence: sence,
            },
        });
    }
    /**
     * 
     * @summary 增加用户，在电子秤端调用
     * @param UserInfo1? userInfo1 
     */
    public schooluserPost(userInfo1?: UserInfo1): Promise<GuidCodeResult> {
        return send({
            url: `/schooluser`,
            method: 'POST',
            body: userInfo1,
        });
    }
    /**
     * 
     * @summary 注册用户，小程序管理端调用
     * @param RegisterUserDto registerUserDto 用户信息
     */
    public schooluserRegisterPost(registerUserDto: RegisterUserDto): Promise<CodeResult> {
        return send({
            url: `/schooluser/register`,
            method: 'POST',
            body: registerUserDto,
        });
    }
    /**
     * 
     * @summary 注册用户
     */
    public schooluserRegistersysadminGet(): Promise<void> {
        return send({
            url: `/schooluser/registersysadmin`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 展示收个用户的图
     * @param string areaCode 
     */
    public schooluserShowFirstUserImageGet(areaCode: string): Promise<void> {
        return send({
            url: `/schooluser/show-first-user-image`,
            method: 'GET',
            params: {
                areaCode: areaCode,
            },
        });
    }
    /**
     * 
     * @summary 获取添加用户的二维码
     */
    public schooluserShowcodeGet(): Promise<QrCodeImageCodeResult> {
        return send({
            url: `/schooluser/showcode`,
            method: 'GET',
        });
    }
}

/**
 * SchoolUserApi - instance
 */
export const SchoolUserApiInstance = new SchoolUserApi();

