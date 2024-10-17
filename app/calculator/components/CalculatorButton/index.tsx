import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle; // Allow custom styles to be passed
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '22%',
    backgroundColor: 'lightgray',
    padding: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default CalculatorButton;
