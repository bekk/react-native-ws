import React, { useState, useEffect } from 'react'
import {
  View, Image, Text, Button, StyleSheet, ActivityIndicator
} from 'react-native'

function PokeDetails({ id, handleClick }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    if (id) {
      fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => setPokemon(data))
        .catch(err => console.log(err))
    }
  }, [id])

  if (pokemon == null) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return (
    <View>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }}
        style={ styles.image }
      />

      <Text>{ 'ID: ' + id + ' ' + pokemon.name }</Text>
      <Text>{ 'Type: ' + pokemon.types[0].type.name }</Text>

      <Button title="Back" onPress={ handleClick } />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
})

export default PokeDetails
