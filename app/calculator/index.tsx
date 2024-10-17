import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useCalculator from './useCalculator';
import CalculatorButton from './components/CalculatorButton';  // Import the new component

const Calculator: React.FC = () => {
  const {
    displayValue,
    inputDigit,
    inputDecimal,
    handleOperator,
    handlePercentage,
    handleClear,
    handleEquals,
    handleNegate,
  } = useCalculator();

  return (
    <View style={styles.calculator}>
      <View style={styles.calculatorDisplay}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.calculatorKeypad}>
        <CalculatorButton label="AC" onPress={handleClear} />
        <CalculatorButton label="+/-" onPress={handleNegate} />
        <CalculatorButton label="%" onPress={handlePercentage} />
        <CalculatorButton label="÷" onPress={() => handleOperator("/")} />
        <CalculatorButton label="7" onPress={() => inputDigit("7")} />
        <CalculatorButton label="8" onPress={() => inputDigit("8")} />
        <CalculatorButton label="9" onPress={() => inputDigit("9")} />
        <CalculatorButton label="×" onPress={() => handleOperator("*")} />
        <CalculatorButton label="4" onPress={() => inputDigit("4")} />
        <CalculatorButton label="5" onPress={() => inputDigit("5")} />
        <CalculatorButton label="6" onPress={() => inputDigit("6")} />
        <CalculatorButton label="-" onPress={() => handleOperator("-")} />
        <CalculatorButton label="1" onPress={() => inputDigit("1")} />
        <CalculatorButton label="2" onPress={() => inputDigit("2")} />
        <CalculatorButton label="3" onPress={() => inputDigit("3")} />
        <CalculatorButton label="+" onPress={() => handleOperator("+")} />
        <CalculatorButton label="0" onPress={() => inputDigit("0")} style={styles.zeroButton} />
        <CalculatorButton label="." onPress={inputDecimal} />
        <CalculatorButton label="=" onPress={handleEquals} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    width: '100%',
  },
  calculatorDisplay: {
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  displayText: {
    color: 'white',
    fontSize: 36,
  },
  calculatorKeypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  zeroButton: {
    flex: 2,
  },
});

export default Calculator;
