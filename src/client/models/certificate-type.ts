/* tslint:disable */
/* eslint-disable */




export const CertificateType = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_4: 4,
    NUMBER_8: 8,
    NUMBER_16: 16,
    NUMBER_32: 32,
    NUMBER_64: 64
} as const;

export type CertificateType = typeof CertificateType[keyof typeof CertificateType];



