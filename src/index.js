import { addDecorator } from '@kadira/storybook';
import { addonManager } from 'storybook-adk';
import routes from './decoratorRoutes';

import addonApi from './api';
import config from './config';
import defaultData from './defaultData';

addonManager.setStoreSettings({
    defaultData,
    addonApi,
    config,
    queryParams: {
        label: 'init',
        index: 0,
    },
});

export function addonDecorator(initData) {
    return addonManager.buidDecorator(initData, routes, 'lc');
}

export function sendtoStyleGuidist(initData) {
    addDecorator(addonManager.buidDecorator(initData, routes, 'gl'));
}

