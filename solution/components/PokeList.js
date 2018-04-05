import React from "react";
import { View, Text, FlatList } from "react-native";

import PokeCell from "./PokeCell";

const pokemonIds = Array.from({ length: 150 }, (v, k) => k + 1);

const PokeList = ({ handleClick }) => {
  return (
    <View>
      <FlatList
        numColumns="3"
        data={pokemonIds}
        renderItem={({ item }) => (
          <PokeCell id={item} handleClick={handleClick} />
        )}
        keyExtractor={(item, index) => item}
      />
    </View>
  );
};

export default PokeList;
