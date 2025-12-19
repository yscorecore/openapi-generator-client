/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { CertExpiredDetails } from './cert-expired-details';
// May contain unused imports in some cases
// @ts-ignore
import type { DataExceptionDetails } from './data-exception-details';
// May contain unused imports in some cases
// @ts-ignore
import type { OperationExceptionDetails } from './operation-exception-details';
// May contain unused imports in some cases
// @ts-ignore
import type { OutOfDateDetails } from './out-of-date-details';
// May contain unused imports in some cases
// @ts-ignore
import type { SystemAnomaly } from './system-anomaly';

export interface ExceptionDetails {
    'operation'?: OperationExceptionDetails;
    'outOfDate'?: OutOfDateDetails;
    'dataExceptions'?: DataExceptionDetails;
    'systemAnomaly'?: SystemAnomaly;
    'certExpiredDetails'?: CertExpiredDetails;
}

