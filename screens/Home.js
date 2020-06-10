import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import PalettePreview from '../screens/PalettePreview';

const Home = ({ navigation }) => {
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

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handlePallete();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    handlePallete();
  }, []);

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
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
