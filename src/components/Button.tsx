import React, {FC} from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';
interface Props extends PressableProps {
  title: string;
}
const Button: FC<Props> = ({title, ...props}) => {
  return (
    <Pressable
      {...props}
      style={StyleSheet.flatten([styles.button, props.style])}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export {Button};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000080',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
