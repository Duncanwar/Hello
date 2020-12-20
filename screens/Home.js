import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PalettePreview from '../screens/PalettePreview';

const Home = ({ navigation, route }) => {
  const colorPalette = route.params ? route.params.colorPalette : undefined;
  const [color, setColor] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handlePallete = useCallback(async () => {
    const res = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (res.ok) {
      const palette = await res.json();
      setColor(palette);
    }
  }, []);

  useEffect(() => {
    handlePallete();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handlePallete();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (colorPalette) {
      setColor((current) => [colorPalette, ...current]);
    }
  }, [colorPalette]);

  return (
    <FlatList
      style={styles.list}
      data={color}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          onPress={() => navigation.push('ColorPalette', item)}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewPaletteModal')}
        >
          <Text style={styles.head}>ADD A COLOR SCHEME</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  head: {
    padding: 10,
    color: '#00A0B0',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
