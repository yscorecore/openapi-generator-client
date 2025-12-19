/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { MealKind } from './meal-kind';

export interface StockOutModel {
    'id'?: string;
    'date'?: string;
    'mealKind'?: MealKind;
    'isNutritious'?: boolean;
    'numberOfDiners'?: number;
    'numberOfBenefitStudents'?: number;
    'numberOfAskForLeaves'?: number;
    'numberOfFaceRecognitions'?: number;
    'numberOfLeaderMeals'?: number;
    'receiveUser'?: string | null;
    'totalPrice'?: number;
    'createTime'?: string;
}



