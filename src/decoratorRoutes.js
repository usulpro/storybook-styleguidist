import React from 'react';
import addonDecor from './containers/addonDecorator';

export default function routes(currentStoreCompose) {
    const AddonDecor = addonDecor(currentStoreCompose);

    return function attach(story, ...props) {
        return (
          <div>
            <AddonDecor
              story={story}
            />
          </div>
        );
    };
}
