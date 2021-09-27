import React from 'react';
import {useWindowDimensions} from 'react-native';

export enum OrientationType {
  portrait = 'portrait',
  landscape = 'landscape',
}

const getCurrentOrientationType = (width: number, height: number) => {
  return height > width ? OrientationType.portrait : OrientationType.landscape;
};

export const useDeviceOrientation = () => {
  const window = useWindowDimensions();
  return getCurrentOrientationType(window.width, window.height)
};

export default useDeviceOrientation;
