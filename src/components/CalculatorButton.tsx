import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface CalculatorButtonProps {
  text: string;
  color: '#9B9B9B' | '#FF9427' | '#2D2D2D';
  wide?: boolean;
  onPressFn: (num: string) => void;
}

export const CalculatorButton = ({
  text,
  color,
  wide = false,
  onPressFn,
}: CalculatorButtonProps) => {
  const textColor = color === '#9B9B9B' ? 'black' : 'white';
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onPressFn(text)}>
      <View
        style={[
          styles.button,
          {backgroundColor: color, width: wide ? 180 : 80},
        ]}>
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#9B9B9B',
    borderRadius: 100,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    // padding: 10,
  },
});
