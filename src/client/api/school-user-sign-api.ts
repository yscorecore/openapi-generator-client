/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { CodeImage } from "../models"
import type { CodeResult } from "../models"
import type { CodeUser } from "../models"

/**
 * SchoolUserSignApi - API class
 */
export class SchoolUserSignApi {
    /**
     * 
     * @summary 查询用户
     * @param string code 
     */
    public usersignQueryCodeGet(code: string | null): Promise<CodeUser> {
        return send({
            url: '/usersign/query/{code}'
                .replace(`{${"code"}}`, encodeURIComponent(String(code))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string code 
     */
    public usersignReleaseCodeCodePost(code: string | null): Promise<CodeResult> {
        return send({
            url: '/usersign/release-code/{code}'
                .replace(`{${"code"}}`, encodeURIComponent(String(code))),
            method: 'POST',
        });
    }
    /**
     * 
     */
    public usersignRequestCodePost(): Promise<CodeImage> {
        return send({
            url: '/usersign/request-code',
            method: 'POST',
        });
    }
    /**
     * 
     * @param string code 
     */
    public usersignSignCodePost(code: string | null): Promise<CodeResult> {
        return send({
            url: '/usersign/sign/{code}'
                .replace(`{${"code"}}`, encodeURIComponent(String(code))),
            method: 'POST',
        });
    }
}

/**
 * SchoolUserSignApi - instance
 */
export const SchoolUserSignApiInstance = new SchoolUserSignApi();

