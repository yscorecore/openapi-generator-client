/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { ControlCommands } from './control-commands';

export interface CaremaControl {
    'nvrCode'?: string | null;
    'channelCode'?: string | null;
    'channelIndex'?: number;
    'config'?: string | null;
    'cameraIndexCode'?: string | null;
    'action'?: number;
    'commandEnum'?: ControlCommands;
    'command'?: string | null;
    'speed'?: number | null;
    'presetIndex'?: number | null;
}



