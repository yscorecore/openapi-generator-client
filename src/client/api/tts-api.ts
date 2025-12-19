/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { TextSpeechResCodeResult } from "../models"

/**
 * TtsApi - API class
 */
export class TtsApi {
    /**
     * 
     * @param string? text 
     */
    public ttsDownloadGet(text?: string | null): Promise<void> {
        return send({
            url: `/Tts/download`,
            method: 'GET',
            params: {
                Text: text,
            },
        });
    }
    /**
     * 
     * @param string? text 
     */
    public ttsGet(text?: string | null): Promise<TextSpeechResCodeResult> {
        return send({
            url: `/Tts`,
            method: 'GET',
            params: {
                Text: text,
            },
        });
    }
}

/**
 * TtsApi - instance
 */
export const TtsApiInstance = new TtsApi();

