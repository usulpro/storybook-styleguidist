/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import { sendtoStyleGuidist } from '../src/';

import Button from './button';

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */

const codeMap = {};
sendtoStyleGuidist(() => codeMap);

function storeCode(context, src, info) {
    const key = `${context.kind}::${context.story}`;
    codeMap[key] = {
        src,
        info,
        context,
    };
//  console.info('store Code:', codeMap);
}

    storiesOf('Knobs1', module)
        .addDecorator(withKnobs)
        .addDecorator((story) => {
            return (
        <div>
            <h3>LOCAL DECORATOR:</h3>
            <p>
                <small>Setup Knobs in "KNOBS" panel and press <b>Generate Markdown</b></small>
            </p>
            <div>{story()}</div>
        </div>
        )
    ; })
    .addStyleGuide('Knob1', 'Story Description for Knob1', () => (
      <div style={{ color: 'green' }} className="green" title="Knobs">
          <p>{text('Title3', 'Knob1.Title')}</p>
          <p>
              <button>
                {text('Subtitle3', 'Knob1.SubTitle')}
              </button>
          </p>
        </div>
    ), { getCode: storeCode })
    .addStyleGuide('Knob2', 'Story Description for Knob2', () => (
      <div style={{ color: 'green' }} className="green" title="Knobs">
          <button title={text('Title4', 'Knob2.Title')}>
            <a href="#"><p>{text('Subtitle4', 'Knob2.SubTitle')}</p></a>
          </button>
          
        </div>
    ), { getCode: storeCode });

    storiesOf('Knobs2', module)
        .addDecorator(withKnobs)
        .addDecorator((story) => {
            return (
        <div>
            <h3>DECORATOR:</h3>
            <div>{story()}</div>
        </div>
        ) ;
    })
    .addStyleGuide('Knob3', 'Story Description for Knob3', () => (
      <div style={{ color: 'green' }} className="green" title="Knobs">
          <p>{text('Title3', 'Knob1.Title')}</p>
          <p>{text('Subtitle3', 'Knob1.SubTitle')}</p>
        </div>
    ), { getCode: storeCode })
    .addStyleGuide('Knob4', 'Story Description for Knob4', () => (
      <div style={{ color: 'green' }} className="green" title="Knobs">
          <p>{text('Title4', 'Knob2.Title')}</p>
          <p>{text('Subtitle4', 'Knob2.SubTitle')}</p>
        </div>
    ), { getCode: storeCode });


storiesOf('No decorator', module)
    .addStyleGuide('Example1', 'Example with 4 nested levels', () => (
      <div className="example-component">
          <div>
            <div>
              <div>
                <div>Inside</div>
              </div>
            </div>
          </div>
          <Button title="no decor 1" />
        </div>
    ), { getCode: storeCode })
    .addStyleGuide('Example2', 'Example with no local decorator:', () => (
      <div className="example-component">
        <Button title="no decor 2" />
      </div>
    ), { getCode: storeCode });

storiesOf('Podda App1', module)
    .addDecorator(story => (
      <div>
        <h3>DECORATOR:</h3>
        <div>{story()}</div>
      </div>
    ))
    .addStyleGuide('Example1', () => (
      <div className="example-component">
          <Button title="Example 1" />
        </div>
    ), { getCode: storeCode })
    .addStyleGuide('Example2', () => (
      <div className="example-component">
          <Button title="Example 2" />
        </div>
    ), { getCode: storeCode });

storiesOf('Podda App2', module)
    .addStyleGuide('Example3', () => (
      <div className="example-component">
          <Button title="Example 3" />
        </div>
    ), { getCode: storeCode })

    .addStyleGuide('Example4', () => (
      <div className="example-component">
          <Button title="Example 4" />
        </div>
    ), { getCode: storeCode });



