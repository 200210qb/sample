import React, {useCallback, useRef, useState} from 'react';
import {View, useWindowDimensions, Text, Button} from 'react-native';
import {Canvas, Circle, useTouchHandler} from '@shopify/react-native-skia';

import {useSelector, useDispatch} from 'react-redux';
import {updateColor} from '../actions';

const Drawing = () => {
  const {color} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const {width} = useWindowDimensions();
  const [canvasHeight, setCanvasHeight] = useState(400);
  const onDrawingStart = useCallback((touchInfo: TouchInfo) => {
    console.log('onDrawingStart ' + color);
  }, [color]);

  const changeColor = selectedColor => {
    console.log('change color to ' + selectedColor);
    dispatch(updateColor(selectedColor));
  };

  const touchHandler = useTouchHandler({
    onStart: onDrawingStart,
  });

  const onLayout = (event: LayoutChangeEvent) => {
    console.log('onlayout');
    setCanvasHeight(event.nativeEvent.layout.height);
  };

  return (
    <View
      style={{
        backgroundColor: '#ff0000',
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        onLayout={onLayout}
        style={{
          width: width - 24,
          flexGrow: 1,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          overflow: 'hidden',
          elevation: 1,
        }}>
        <Canvas
          onTouch={touchHandler}
          style={{
            height: canvasHeight,
            width: width - 24,
            position: 'absolute',
          }}>
          <Circle r={128} cx={128} cy={128} color="red" />
        </Canvas>
        <Button
          onPress={() => {
            changeColor('red');
          }}
          title={'change red'}
        />
        <Button
          onPress={() => {
            changeColor('black');
          }}
          title={'change black'}
        />
        <Button
          onPress={() => {
            changeColor('green');
          }}
          title={'change green'}
        />
        <Text>selected color: {color}</Text>
      </View>
    </View>
  );
};

export default Drawing;
