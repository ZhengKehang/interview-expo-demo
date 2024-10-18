import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle, View} from 'react-native';

interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle; // Allow custom styles to be passed
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, onPress, style }) => {
  return (
    <View style={[styles.buttonBox, style]}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    width: '25%',
    padding: 5,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default CalculatorButton;
