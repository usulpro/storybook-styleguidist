import * as storybook from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import sgAddon from '../sg_addon';
storybook.setAddon(sgAddon);

setOptions({
    name: 'React Theming',
    url: 'https://github.com/sm-react/react-theming',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: true,
});

storybook.configure(
    () => {
      require('../stories');
    },
    module
);
