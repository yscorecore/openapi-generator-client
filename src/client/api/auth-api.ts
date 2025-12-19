/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { Code2SessionDtoCodeResult } from "../models"

/**
 * AuthApi - API class
 */
export class AuthApi {
    /**
     * 
     * @summary 获取微信Session
     * @param string code 
     */
    public authCode2sessionGet(code: string): Promise<Code2SessionDtoCodeResult> {
        return send({
            url: `/auth/code2session`,
            method: 'GET',
            params: {
                code: code,
            },
        });
    }
}

/**
 * AuthApi - instance
 */
export const AuthApiInstance = new AuthApi();

