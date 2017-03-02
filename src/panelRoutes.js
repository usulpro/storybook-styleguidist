import React from 'react';
import mdGen from './containers/mdGen';


export default function routes(currentStoreCompose) {
    const MDGen = mdGen(currentStoreCompose);


    return function attach(story, ...props) {
        return (
          <div>
            <MDGen />

          </div>
        );
    };
}
