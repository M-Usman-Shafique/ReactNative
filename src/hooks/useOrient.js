import {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';

export const useOrient = () => {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  const [isLandscape, setIsLandscape] = useState(windowWidth > windowHeight);

  useEffect(() => {
    setIsLandscape(windowWidth > windowHeight);
  }, [windowWidth, windowHeight]);

  return {isLandscape};
};
