/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeResult } from "../models"
import type { ConfirmLoginInfo } from "../models"
import type { QrCodeImageCodeResult } from "../models"
import type { UserLoginInfoCodeResult } from "../models"

/**
 * LoginApi - API class
 */
export class LoginApi {
    /**
     * 
     * @summary 获取login的二维码
     */
    public loginBeginGet(): Promise<QrCodeImageCodeResult> {
        return send({
            url: `/login/begin`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 确认登录
     * @param ConfirmLoginInfo confirmLoginInfo 
     */
    public loginConfirmPost(confirmLoginInfo: ConfirmLoginInfo): Promise<CodeResult> {
        return send({
            url: `/login/confirm`,
            method: 'POST',
            body: confirmLoginInfo,
        });
    }
    /**
     * 
     * @summary 查询login的信息
     */
    public loginQueryGet(): Promise<UserLoginInfoCodeResult> {
        return send({
            url: `/login/query`,
            method: 'GET',
        });
    }
}

/**
 * LoginApi - instance
 */
export const LoginApiInstance = new LoginApi();

