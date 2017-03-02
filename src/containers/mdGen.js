import { addonComposer } from 'storybook-adk';
import MDGen from '../components/mdGen';

function storiesCycle(storiesList, api) {
    return () => {
        if (!storiesList) return;
        storiesList.forEach((kind) => {
            const kindName = kind.kind;
            kind.stories.forEach((story) => {
                const storyName = story;
                console.log(`select: ${kindName} -> ${storyName}`);
                api.selectStory(kindName, storyName);
            });
        });
        api.selectStory(storiesList[0].kind, storiesList[0].stories[0]);
    };
}

function storeHandler(storeData, props, addonApi, storybookApi) {
    return {
        codeMap: storeData.codeMap,
        storiesList: storeData.storiesList,
        onGenMD: storiesCycle(storeData.storiesList, storybookApi),
//        startGen: addonApi.startGen,
    };
}
export default addonComposer(storeHandler, MDGen);

// const storiesFetch(api) {
//    if (!api) return;
//    api._setStories = api.setStories;
//    api.setStories = (storiesList) => {
//        api._setStories(storiesList);
//    }
// }
