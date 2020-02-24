import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function PokeList({pokemonIds, onSelect}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <FlatList
          data={pokemonIds}
          keyExtractor={item => item}
          numColumns={3}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onSelect(item)}>
              <View style={styles.box}>
                <Image
                  height="100%"
                  width="100%"
                  style={styles.image}
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item}.png`,
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'gray',
    margin: 5,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
