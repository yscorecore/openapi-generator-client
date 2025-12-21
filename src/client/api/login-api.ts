/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { ConfirmLoginInfo } from "../models"
import type { QrCodeImage } from "../models"
import type { UserLoginInfo } from "../models"

/**
 * LoginApi - API class
 */
export class LoginApi {
    /**
     * 
     * @summary 获取login的二维码
     */
    public loginBeginGet(): Promise<QrCodeImage> {
        return send({
            url: '/login/begin',
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 确认登录
     * @param ConfirmLoginInfo confirmLoginInfo 
     */
    public loginConfirmPost(confirmLoginInfo: ConfirmLoginInfo): Promise<void> {
        return send({
            url: '/login/confirm',
            method: 'POST',
            body: confirmLoginInfo,
        });
    }
    /**
     * 
     * @summary 查询login的信息
     */
    public loginQueryGet(): Promise<UserLoginInfo> {
        return send({
            url: '/login/query',
            method: 'GET',
        });
    }
}

/**
 * LoginApi - instance
 */
export const LoginApiInstance = new LoginApi();

