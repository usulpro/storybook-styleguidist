import { register } from 'storybook-adk';
import addonApi from './api';
import config from './config';
import defaultData from './defaultData';
import panelRoutes from './panelRoutes';

function onChannelInit(addonStore, storybookApi) {
    let storiesList;
    // console.log('onChannelInit:', storybookApi);
    storybookApi._setStories = storybookApi.setStories;
    storybookApi.setStories = (list) => {
        // console.log('storybookApi:', list);
        storiesList = list;
        storybookApi._setStories(list);
        addonStore.set('storiesList', list);
    };
}

const panelSettings = {
    initData: 'ADK Panel',
    defaultData,
    addonApi,
    render: panelRoutes,
    config,
    queryParams: {
        votes: 'init',
        index: 0,
    },
    onChannelInit,
};

register(panelSettings);
