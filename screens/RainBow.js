import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import ColorBox from '../src/components/ColorBox';

const Rainbow = ({ route, navigation }) => {
  const { color } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={color}
      keyExtractor={(item) => {
        item.colorName;
      }}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});
export default Rainbow;
