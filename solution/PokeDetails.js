import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
} from 'react-native';

function PokeDetails({pokeId, onBack}) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (pokeId) {
      fetch(`https://poke-api.now.sh/pokemon/${pokeId}/`)
        .then(res => res.json())
        .then(data => setPokemon(data))
        .catch(err => console.log(err));
    }
  }, [pokeId]);

  if (!pokemon) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView>
      <Image
        height="100%"
        width="100%"
        style={styles.image}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`,
        }}
      />
      <Text>Name: {pokemon.name}</Text>
      <Button onPress={onBack} title="Gå tilbake" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});

export default PokeDetails;
