/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BenefitStudentBatchDtoCodeResult } from "../models"
import type { BenefitStudentBatchEntryDtoCodeResult } from "../models"
import type { BenefitStudentBatchEntryDtoListCodeResult } from "../models"
import type { BenefitStudentDto } from "../models"
import type { BenefitStudentItemInfoPaginationResCodeResult } from "../models"
import type { Int32CodeResult } from "../models"
import type { SchoolYearSession } from "../models"
import type { SchoolYearsAndAllClassDtoListCodeResult } from "../models"

/**
 * BenefitStudentApi - API class
 */
export class BenefitStudentApi {
    /**
     * 
     * @summary 上传收益学生名单--根据学期
     * @param number schoolYear 
     * @param SchoolYearSession schoolSession 
     * @param string? contentType 
     * @param string? contentDisposition 
     * @param { [key: string]: Array<string>; }? headers 
     * @param number? length 
     * @param string? name 
     * @param string? fileName 
     */
    public benefitsAddBenefitStudentsTermPost(schoolYear: number, schoolSession: SchoolYearSession, contentType?: string | null, contentDisposition?: string | null, headers?: { [key: string]: Array<string>; } | null, length?: number, name?: string | null, fileName?: string | null): Promise<BenefitStudentBatchEntryDtoCodeResult> {
        return send({
            url: `/benefits/AddBenefitStudentsTerm`,
            method: 'POST',
            forms: {
                ContentType: contentType,
                ContentDisposition: contentDisposition,
                Headers: headers,
                Length: length,
                Name: name,
                FileName: fileName,
                schoolYear: schoolYear,
                schoolSession: schoolSession,
            },
        });
    }
    /**
     * 
     * @summary 新增受益学生
     * @param BenefitStudentDto? benefitStudentDto 
     */
    public benefitsAddPost(benefitStudentDto?: BenefitStudentDto): Promise<Int32CodeResult> {
        return send({
            url: `/benefits/add`,
            method: 'POST',
            body: benefitStudentDto,
        });
    }
    /**
     * 
     * @summary 根据批次号获取信息收益学生
     * @param string batchNo 批次号
     */
    public benefitsBatchNoGet(batchNo: string): Promise<BenefitStudentBatchDtoCodeResult> {
        return send({
            url: `/benefits/{batchNo}`
                .replace(`{${"batchNo"}}`, encodeURIComponent(String(batchNo))),
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 获取批次列表
     * @param string? startTime 开始时间
     * @param number? limit 最大条数
     */
    public benefitsGet(startTime?: string | null, limit?: number): Promise<BenefitStudentBatchEntryDtoListCodeResult> {
        return send({
            url: `/benefits`,
            method: 'GET',
            params: {
                startTime: startTime,
                limit: limit,
            },
        });
    }
    /**
     * 
     * @summary 删除学年批次
     * @param string id 
     */
    public benefitsIdDelete(id: string): Promise<Int32CodeResult> {
        return send({
            url: `/benefits/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 删除受益学生
     * @param string id 
     */
    public benefitsItemsIdDelete(id: string): Promise<Int32CodeResult> {
        return send({
            url: `/benefits/items/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id))),
            method: 'DELETE',
        });
    }
    /**
     * 
     * @summary 获取最后一次收益学生
     */
    public benefitsLatestGet(): Promise<BenefitStudentBatchDtoCodeResult> {
        return send({
            url: `/benefits/latest`,
            method: 'GET',
        });
    }
    /**
     * 
     * @summary 上传收益学生名单
     * @param number schoolYear 
     * @param string? contentType 
     * @param string? contentDisposition 
     * @param { [key: string]: Array<string>; }? headers 
     * @param number? length 
     * @param string? name 
     * @param string? fileName 
     */
    public benefitsPost(schoolYear: number, contentType?: string | null, contentDisposition?: string | null, headers?: { [key: string]: Array<string>; } | null, length?: number, name?: string | null, fileName?: string | null): Promise<BenefitStudentBatchEntryDtoCodeResult> {
        return send({
            url: `/benefits`,
            method: 'POST',
            forms: {
                ContentType: contentType,
                ContentDisposition: contentDisposition,
                Headers: headers,
                Length: length,
                Name: name,
                FileName: fileName,
                schoolYear: schoolYear,
            },
        });
    }
    /**
     * 
     * @summary 修改受益学生
     * @param BenefitStudentDto? benefitStudentDto 
     */
    public benefitsPut(benefitStudentDto?: BenefitStudentDto): Promise<Int32CodeResult> {
        return send({
            url: `/benefits`,
            method: 'PUT',
            body: benefitStudentDto,
        });
    }
    /**
     * 
     * @summary 获取班级的学生列表
     * @param number? schoolYear 
     * @param string? className 
     * @param number? page 
     * @param number? size 
     */
    public benefitsStudentitemsGet(schoolYear?: number | null, className?: string | null, page?: number, size?: number): Promise<BenefitStudentItemInfoPaginationResCodeResult> {
        return send({
            url: `/benefits/studentitems`,
            method: 'GET',
            params: {
                SchoolYear: schoolYear,
                ClassName: className,
                Page: page,
                Size: size,
            },
        });
    }
    /**
     * 
     * @summary 获取所有的班级
     */
    public benefitsYearAllclassGet(): Promise<SchoolYearsAndAllClassDtoListCodeResult> {
        return send({
            url: `/benefits/year_allclass`,
            method: 'GET',
        });
    }
}

/**
 * BenefitStudentApi - instance
 */
export const BenefitStudentApiInstance = new BenefitStudentApi();

