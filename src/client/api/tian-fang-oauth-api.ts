/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { RootObjectCodeResult } from "../models"

/**
 * TianFangOAuthApi - API class
 */
export class TianFangOAuthApi {
    /**
     * 
     * @param string? idToken 
     */
    public oauthTianfangCallbackGet(idToken?: string | null): Promise<void> {
        return send({
            url: `/oauth/tianfang/callback`,
            method: 'GET',
            params: {
                id_token: idToken,
            },
        });
    }
    /**
     * 
     * @param string? session 
     */
    public oauthTianfangLoginPost(session?: string | null): Promise<RootObjectCodeResult> {
        return send({
            url: `/oauth/tianfang/login`,
            method: 'POST',
            params: {
                session: session,
            },
        });
    }
}

/**
 * TianFangOAuthApi - instance
 */
export const TianFangOAuthApiInstance = new TianFangOAuthApi();

