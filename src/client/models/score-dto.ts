/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { EmptyScoreItemDto } from './empty-score-item-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { LossRecordScoreDto } from './loss-record-score-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { ScoreItemDto } from './score-item-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { StockInScoreItemDto } from './stock-in-score-item-dto';

export interface ScoreDto {
    'morningCheck'?: ScoreItemDto;
    'stockOut'?: ScoreItemDto;
    'stockIn'?: StockInScoreItemDto;
    'stockReturn'?: EmptyScoreItemDto;
    'deepProcessing'?: EmptyScoreItemDto;
    'menu'?: ScoreItemDto;
    'menuSampled'?: ScoreItemDto;
    'orderSample'?: EmptyScoreItemDto;
    'leaderMeal'?: ScoreItemDto;
    'lossRecord'?: LossRecordScoreDto;
    'disinfect'?: ScoreItemDto;
}

