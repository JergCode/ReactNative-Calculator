import {Text, View, StyleSheet} from 'react-native';
import {styles} from '../theme/AppTheme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculation} from '../hooks/useCalculation';

export const CalculatorScreen = () => {
  const {
    firstNumber,
    secondNumber,
    onClear,
    onCalculate,
    onDeleteNumber,
    onNumberPressed,
    onOperation,
  } = useCalculation();
  return (
    <View style={calculatorStyles.container}>
      {secondNumber === '0' ? null : (
        <Text style={[calculatorStyles.row, calculatorStyles.previousResult]}>
          {secondNumber}
        </Text>
      )}
      <Text
        style={[styles.operationText, calculatorStyles.row]}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {firstNumber}
      </Text>
      <View style={calculatorStyles.row}>
        <CalculatorButton text="C" color="#9B9B9B" onPressFn={onClear} />
        <CalculatorButton
          text="+/-"
          color="#9B9B9B"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton
          text="DEL"
          color="#9B9B9B"
          onPressFn={onDeleteNumber}
        />
        <CalculatorButton text="/" color="#FF9427" onPressFn={onOperation} />
      </View>
      <View style={calculatorStyles.row}>
        <CalculatorButton
          text="1"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton
          text="2"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton
          text="3"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton text="x" color="#FF9427" onPressFn={onOperation} />
      </View>
      <View style={calculatorStyles.row}>
        <CalculatorButton
          text="4"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton
          text="5"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton
          text="6"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton text="-" color="#FF9427" onPressFn={onOperation} />
      </View>
      <View style={calculatorStyles.row}>
        <CalculatorButton
          text="7"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton
          text="8"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton
          text="9"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton text="+" color="#FF9427" onPressFn={onOperation} />
      </View>
      <View style={calculatorStyles.row}>
        <CalculatorButton
          wide
          text="0"
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton
          text="."
          color="#2D2D2D"
          onPressFn={onNumberPressed}
        />
        <CalculatorButton text="=" color="#FF9427" onPressFn={onCalculate} />
      </View>
    </View>
  );
};

const calculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  operations: {},
  row: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 12,
  },
  previousResult: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
  },
});
