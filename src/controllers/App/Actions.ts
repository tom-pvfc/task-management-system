import { APP_START } from '../../constants';

export const TYPES = {
    DATA_LOADED: APP_START | 0x00001,
    SAVE_DATA: 'SAVE_DATA',
};

export const ACTIONS = {
    DATA_LOADED: (data: any) => ({
        data,
        type: TYPES.DATA_LOADED,
    }),
    SAVE_DATA: (data: any) => ({
        data,
        type: TYPES.SAVE_DATA,
    }),
};
