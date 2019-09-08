/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import {ViewProps} from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';


export type IconNames = 'checked-fill' | 'uncheck' | 'checked';

export interface IconProps extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

// If you don't want to make all icons in one file,
// try to set generate_mode to "depends-on" in root file "iconfont.json".
// And then regenerate icons by using cli command.
const Icon: FunctionComponent<IconProps> = ({ color, name, size, ...rest }) => {
  switch (name) {
    case 'checked-fill':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M38.68444445 2.27555555h946.6311111a36.40888889 36.40888889 0 0 1 36.4088889 36.4088889v946.6311111a36.40888889 36.40888889 0 0 1-36.4088889 36.4088889H38.68444445a36.40888889 36.40888889 0 0 1-36.4088889-36.4088889V38.68444445a36.40888889 36.40888889 0 0 1 36.4088889-36.4088889z m738.00817777 277.65418667l-353.12981333 376.94122667-179.42300444-150.7328a36.40888889 36.40888889 0 1 0-46.82183112 55.74200889l205.81944889 172.94222222a36.40888889 36.40888889 0 0 0 49.98940445-2.98552889L829.8496 329.70069333a36.40888889 36.40888889 0 1 0-53.15697778-49.77095111z"
            fill={color ? typeof color === 'string' && color || color[0] || '#333333' : '#333333'}
          />
        </Svg>
      );
    case 'uncheck':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M948.90666667 2.27555555H75.09333333c-40.15900445 0-72.81777778 32.65877333-72.81777778 72.81777778v873.81333334c0 40.15900445 32.65877333 72.81777778 72.81777778 72.81777778h873.81333334c40.15900445 0 72.81777778-32.65877333 72.81777778-72.81777778V75.09333333c0-40.15900445-32.65877333-72.81777778-72.81777778-72.81777778zM75.09333333 948.90666667V75.09333333h873.81333334l0.07281778 873.81333334H75.09333333z"
            fill={color ? typeof color === 'string' && color || color[0] || '#333333' : '#333333'}
          />
        </Svg>
      );
    case 'checked':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M948.90666667 2.27555555H75.09333333c-40.15900445 0-72.81777778 32.65877333-72.81777778 72.81777778v873.81333334c0 40.15900445 32.65877333 72.81777778 72.81777778 72.81777778h873.81333334c40.15900445 0 72.81777778-32.65877333 72.81777778-72.81777778V75.09333333c0-40.15900445-32.65877333-72.81777778-72.81777778-72.81777778zM75.09333333 948.90666667V75.09333333h873.81333334l0.07281778 873.81333334H75.09333333z"
            fill={color ? typeof color === 'string' && color || color[0] || '#333333' : '#333333'}
          />
          <Path
            d="M776.69262222 279.92974222l-353.12981333 376.94122667-179.42300444-150.7328a36.40888889 36.40888889 0 0 0-46.85824 55.77841778l205.81944888 172.94222222a36.40888889 36.40888889 0 0 0 49.98940445-2.98552889L829.8496 329.70069333a36.40888889 36.40888889 0 1 0-53.15697778-49.77095111z"
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
