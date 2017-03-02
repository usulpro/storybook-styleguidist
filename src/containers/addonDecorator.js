import { addonComposer } from 'storybook-adk';
import AddonDecor from '../components/addonDecorator';

function storeHandler(storeData, props, addonApi) {
    return {
        story: props.story,
        fn: props.initData,
    };
}
export default addonComposer(storeHandler, AddonDecor);
