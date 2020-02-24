import React from 'react'
import { FlatList } from 'react-native'

import Item from './Item'

const pokemonIds = Array.from({ length: 150 }, (v, k) => k + 1)

function PokeList({ handleClick }) {
  return (
    <FlatList
      numColumns="3"
      data={ pokemonIds }
      renderItem={ ({ item }) => (
        <Item id={ item } handleClick={ handleClick } />
      )}
      keyExtractor={ (item, index) => item }
    />
  )
}

export default PokeList
