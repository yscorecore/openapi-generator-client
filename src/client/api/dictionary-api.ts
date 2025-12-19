/* tslint:disable */
/* eslint-disable */

import { send } from "../base2"
import type { Int32StringDictionaryCodeResult } from "../models"
import type { StringInt32StringDictionaryDictionaryCodeResult } from "../models"
import type { StringStringDictionaryCodeResult } from "../models"
import type { StringStringStringDictionaryDictionaryCodeResult } from "../models"

/**
 * DictionaryApi - API class
 */
export class DictionaryApi {
    /**
     * 
     * @summary 获取所有的枚举
     */
    public dictionaryAllNameMappingsGet(): Promise<StringStringStringDictionaryDictionaryCodeResult> {
        return send({
            url: `/dictionary/all/nameMappings`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 根据枚举名称获取下标和中文描述的对照列表
     */
    public dictionaryAllValueMappingsGet(): Promise<StringInt32StringDictionaryDictionaryCodeResult> {
        return send({
            url: `/dictionary/all/valueMappings`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 根据枚举名称获取英文关键字和中文描述的对照列表
     * @param string? enumName 
     */
    public dictionaryNameMappingGet(enumName?: string | null): Promise<StringStringDictionaryCodeResult> {
        return send({
            url: `/dictionary/nameMapping`,
            method: 'GET',
            params: {
                enumName: enumName,
            },
        });
    }
    /**
     * 
     * @summary 根据枚举名称获取下标和中文描述的对照列表
     * @param string? enumName 
     */
    public dictionaryValueMappingGet(enumName?: string | null): Promise<Int32StringDictionaryCodeResult> {
        return send({
            url: `/dictionary/valueMapping`,
            method: 'GET',
            params: {
                enumName: enumName,
            },
        });
    }
}

/**
 * DictionaryApi - instance
 */
export const DictionaryApiInstance = new DictionaryApi();

