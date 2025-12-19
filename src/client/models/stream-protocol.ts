/* tslint:disable */
/* eslint-disable */




export const StreamProtocol = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;

export type StreamProtocol = typeof StreamProtocol[keyof typeof StreamProtocol];



