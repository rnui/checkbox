/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import {ViewProps} from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';


export type IconNames = 'checked-fill' | 'uncheck' | 'checked';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

// If you don't want to make all icons in one file,
// try to set generate_mode to "depends-on" in root file "iconfont.json".
// And then regenerate icons by using cli command.
const Icon: FunctionComponent<Props> = ({ color, name, size, ...rest }) => {
  switch (name) {
    case 'checked-fill':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M96 64h832a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z m648.64 244.032l-310.368 331.296-157.696-132.48a32 32 0 1 0-41.152 48.992l180.896 152a32 32 0 0 0 43.936-2.624L791.36 351.776a32 32 0 1 0-46.72-43.744z"
            fill={color ? typeof color === 'string' && color || color[0] || '#333333' : '#333333'}
          />
        </Svg>
      );
    case 'uncheck':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M896 64H128c-35.296 0-64 28.704-64 64v768c0 35.296 28.704 64 64 64h768c35.296 0 64-28.704 64-64V128c0-35.296-28.704-64-64-64zM128 896V128h768l0.064 768H128z"
            fill={color ? typeof color === 'string' && color || color[0] || '#333333' : '#333333'}
          />
        </Svg>
      );
    case 'checked':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M896 64H128c-35.296 0-64 28.704-64 64v768c0 35.296 28.704 64 64 64h768c35.296 0 64-28.704 64-64V128c0-35.296-28.704-64-64-64zM128 896V128h768l0.064 768H128z"
            fill={color ? typeof color === 'string' && color || color[0] || '#333333' : '#333333'}
          />
          <Path
            d="M744.64 308.032l-310.368 331.296-157.696-132.48a32 32 0 0 0-41.184 49.024l180.896 152a32 32 0 0 0 43.936-2.624L791.36 351.776a32 32 0 1 0-46.72-43.744z"
            fill={color ? typeof color === 'string' && color || color[1] || '#333333' : '#333333'}
          />
        </Svg>
      );

  }

  return null;
};

Icon.defaultProps = {
  size: 18,
};

export default Icon;

/* eslint-enable */
/* tslint:enable */
