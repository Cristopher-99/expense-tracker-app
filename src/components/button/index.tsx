import {Button, StyleSheet} from 'react-native';
import React from 'react';

interface ButtonProps {
  text: string;
  onPress: void;
}
export const CustomButton: React.FC<ButtonProps> = ({text, onPress}) => {
  return <Button onPress={() => onPress} title={text} />;
};

const styles = StyleSheet.create({});
