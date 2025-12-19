/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { ConfirmLoginInfo } from "../models"
import type { QrCodeImageCodeResult } from "../models"
import type { SyncWechatInfo } from "../models"
import type { UserLoginInfoCodeResult } from "../models"

/**
 * SchoolLoginApi - API class
 */
export class SchoolLoginApi {
    /**
     * 
     * @summary 获取login的二维码
     */
    public schoolLoginBeginGet(): Promise<QrCodeImageCodeResult> {
        return send({
            url: `/schoolLogin/begin`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 微信管理端确认登录
     * @param ConfirmLoginInfo confirmLoginInfo 
     */
    public schoolLoginConfirmPost(confirmLoginInfo: ConfirmLoginInfo): Promise<CodeResult> {
        return send({
            url: `/schoolLogin/confirm`,
            method: 'POST',
            body: confirmLoginInfo,
        });
    }
    /**
     * 
     */
    public schoolLoginLogoutPost(): Promise<CodeResult> {
        return send({
            url: `/schoolLogin/logout`,
            method: 'POST',
        });
    }
    /**
     * 
     * @summary 查询login的信息
     */
    public schoolLoginMeGet(): Promise<UserLoginInfoCodeResult> {
        return send({
            url: `/schoolLogin/me`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 查询login的信息
     * @param string? scene 
     */
    public schoolLoginQueryGet(scene?: string | null): Promise<UserLoginInfoCodeResult> {
        return send({
            url: `/schoolLogin/query`,
            method: 'GET',
            params: {
                scene: scene,
            },
        });
    }
    /**
     * 
     * @param string? school 
     * @param boolean? isHyaline 
     */
    public schoolLoginSyncOpenIdPageGet(school?: string, isHyaline?: boolean): Promise<void> {
        return send({
            url: `/schoolLogin/syncOpenIdPage`,
            method: 'GET',
            params: {
                school: school,
                is_hyaline: isHyaline,
            },
        });
    }
    /**
     * 
     * @param SyncWechatInfo? syncWechatInfo 
     */
    public schoolLoginSyncOpenIdPost(syncWechatInfo?: SyncWechatInfo): Promise<CodeResult> {
        return send({
            url: `/schoolLogin/syncOpenId`,
            method: 'POST',
            body: syncWechatInfo,
        });
    }
}

/**
 * SchoolLoginApi - instance
 */
export const SchoolLoginApiInstance = new SchoolLoginApi();

