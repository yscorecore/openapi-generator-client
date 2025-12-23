/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { WechatTemplates } from './wechat-templates';

export interface Code2SessionDto {
    'openId'?: string | null;
    'session'?: string | null;
    'isActive'?: boolean;
    'schoolId'?: string | null;
    'userId'?: string | null;
    'schoolName'?: string | null;
    'areaCode'?: string | null;
    'isNutritiousMixed'?: boolean;
    'userName'?: string | null;
    'userType'?: number | null;
    /**
     * @deprecated
     */
    'wechatMessageTemplates'?: Array<WechatTemplates> | null;
}

