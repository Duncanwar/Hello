import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
];

const AddNewPaletteModal = () => {
  return (
    <View style={styles.list}>
      <Text>Name of Your Color Palette</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="New pallete value"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
  input: {
    borderColor: 'green',
    borderRadius: 10,
  },
});
export default AddNewPaletteModal;
