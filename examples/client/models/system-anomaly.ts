/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CameraOffline } from './camera-offline';
// May contain unused imports in some cases
// @ts-ignore
import type { InspectionEquipment } from './inspection-equipment';
// May contain unused imports in some cases
// @ts-ignore
import type { InspectionVideo } from './inspection-video';
// May contain unused imports in some cases
// @ts-ignore
import type { InspectionisNotBoundNVR } from './inspectionis-not-bound-nvr';
// May contain unused imports in some cases
// @ts-ignore
import type { NvrExceptionDetails } from './nvr-exception-details';

export interface SystemAnomaly {
    'nvrExceptionDetails'?: Array<NvrExceptionDetails> | null;
    'cameraOffline'?: Array<CameraOffline> | null;
    'inspectionEquipment'?: Array<InspectionEquipment> | null;
    'inspectionisNotBoundNVR'?: Array<InspectionisNotBoundNVR> | null;
    'inspectionVideo'?: InspectionVideo;
}

