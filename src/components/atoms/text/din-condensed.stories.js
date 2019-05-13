import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './din-condensed';
import { SIZE_SM, SIZE_MD, SIZE_LG } from '../../../constants/styles/size'

storiesOf('Text', module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add(
    'small',
    () => <Text text="BUMP OF CHICKEN" size={SIZE_SM} />,
    {
      info: {
        styles: stylesheet => ({
          ...stylesheet,
          header: {
            ...stylesheet.header,
            h1: {
              ...stylesheet.header.h1,
              color: 'green'
            }
          }
        })
      }
    }
  )
  .add(
    SIZE_MD,
    () => <Text text="BUMP OF CHICKEN" size={SIZE_MD} />,
    {
      info: {
        styles: stylesheet => ({
          ...stylesheet,
          header: {
            ...stylesheet.header,
            h1: {
              ...stylesheet.header.h1,
              color: 'green'
            }
          }
        })
      }
    }
  )
  .add(
    SIZE_LG,
    () => <Text text="BUMP OF CHICKEN" size={SIZE_LG} />,
    {
      info: {
        styles: stylesheet => ({
          ...stylesheet,
          header: {
            ...stylesheet.header,
            h1: {
              ...stylesheet.header.h1,
              color: 'green'
            }
          }
        })
      }
    }
  );
