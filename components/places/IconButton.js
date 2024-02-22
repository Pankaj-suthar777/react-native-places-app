import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({icon, style, size, color, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
