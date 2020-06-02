import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different Colours
        </Text>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.text}>Cyan</Text>
        </View>
        <View style={[styles.box, styles.mangeta]}>
          <Text style={styles.text}>Mangeta</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Orange</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  mangeta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});
