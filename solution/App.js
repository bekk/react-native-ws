/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';

import PokeList from './PokeList';
import PokeDetails from './PokeDetails';

const pokemonIds = Array(150)
  .fill()
  .map((e, i) => i + 1);

const App = () => {
  const [route, setRoute] = useState('List');
  const [pokeId, setPokeId] = useState(null);

  if (route === 'List') {
    return (
      <PokeList
        pokemonIds={pokemonIds}
        onSelect={id => {
          setPokeId(id);
          setRoute('Details');
        }}
      />
    );
  } else if (route === 'Details') {
    return <PokeDetails pokeId={pokeId} onBack={() => setRoute('List')} />;
  }
};

export default App;
