/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { BooleanCodeResult } from "../models"
import type { ClassDtoListCodeResult } from "../models"
import type { DinnerDtoListCodeResult } from "../models"
import type { StudentDinningDto1 } from "../models"
import type { StudentDinningDtoListCodeResult } from "../models"
import type { StudentDtoListCodeResult } from "../models"

/**
 * SchoolStudentDinningForAccompanyUserApi - API class
 */
export class SchoolStudentDinningForAccompanyUserApi {
    /**
     * 
     * @summary 获取所有搬家
     * @param string? date 
     * @param string? schoolCode 
     */
    public studentDinningClassesGet(date?: string, schoolCode?: string | null): Promise<ClassDtoListCodeResult> {
        return send({
            url: `/student-dinning/classes`,
            method: 'GET',
            params: {
                date: date,
                schoolCode: schoolCode,
            },
        });
    }
    /**
     * 
     * @summary 获取就餐
     * @param string? startDate 
     * @param string? endDate 
     * @param string? schoolCode 
     */
    public studentDinningDinnersGet(startDate?: string, endDate?: string, schoolCode?: string | null): Promise<DinnerDtoListCodeResult> {
        return send({
            url: `/student-dinning/dinners`,
            method: 'GET',
            params: {
                startDate: startDate,
                endDate: endDate,
                schoolCode: schoolCode,
            },
        });
    }
    /**
     * 
     * @summary 学生就餐记录
     * @param string? startDate 
     * @param string? endDate 
     * @param string? classId 
     * @param string? schoolCode 
     */
    public studentDinningListGet(startDate?: string, endDate?: string, classId?: string, schoolCode?: string | null): Promise<StudentDinningDtoListCodeResult> {
        return send({
            url: `/student-dinning/list`,
            method: 'GET',
            params: {
                startDate: startDate,
                endDate: endDate,
                classId: classId,
                schoolCode: schoolCode,
            },
        });
    }
    /**
     * 
     * @summary 保存就餐记录
     * @param string? startDate 
     * @param string? endDate 
     * @param string? classId 
     * @param string? schoolCode 
     * @param Array<StudentDinningDto1>? studentDinningDto1 
     */
    public studentDinningSavePost(startDate?: string, endDate?: string, classId?: string, schoolCode?: string | null, studentDinningDto1?: Array<StudentDinningDto1> | null): Promise<BooleanCodeResult> {
        return send({
            url: `/student-dinning/save`,
            method: 'POST',
            params: {
                startDate: startDate,
                endDate: endDate,
                classId: classId,
                schoolCode: schoolCode,
            },
            body: studentDinningDto1,
        });
    }
    /**
     * 
     * @summary 获取所有学生
     * @param string? classId 
     * @param string? schoolCode 
     */
    public studentDinningStudentsGet(classId?: string, schoolCode?: string | null): Promise<StudentDtoListCodeResult> {
        return send({
            url: `/student-dinning/students`,
            method: 'GET',
            params: {
                classId: classId,
                schoolCode: schoolCode,
            },
        });
    }
}

/**
 * SchoolStudentDinningForAccompanyUserApi - instance
 */
export const SchoolStudentDinningForAccompanyUserApiInstance = new SchoolStudentDinningForAccompanyUserApi();

