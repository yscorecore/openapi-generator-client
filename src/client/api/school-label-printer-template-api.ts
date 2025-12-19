/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { LabelTemplateDtoPaginationDataCodeResult } from "../models"
import type { StringCodeResult } from "../models"

/**
 * SchoolLabelPrinterTemplateApi - API class
 */
export class SchoolLabelPrinterTemplateApi {
    /**
     * 
     * @summary 获取所有的标签模板
     * @param string? type 
     * @param string? size 
     * @param string? brand 
     * @param string? name 
     * @param number? offset 
     * @param number? limit 
     */
    public labelTemplatesListGet(type?: string | null, size?: string | null, brand?: string | null, name?: string | null, offset?: number, limit?: number): Promise<LabelTemplateDtoPaginationDataCodeResult> {
        return send({
            url: `/label-templates/list`,
            method: 'GET',
            params: {
                Type: type,
                Size: size,
                Brand: brand,
                Name: name,
                Offset: offset,
                Limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 标签模板下载
     * @param string name 
     */
    public labelTemplatesNameGet(name: string | null): Promise<StringCodeResult> {
        return send({
            url: `/label-templates/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name))),
            method: 'GET',
        });
    }
}

/**
 * SchoolLabelPrinterTemplateApi - instance
 */
export const SchoolLabelPrinterTemplateApiInstance = new SchoolLabelPrinterTemplateApi();

