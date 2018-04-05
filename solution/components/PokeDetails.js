import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator
} from "react-native";

class PokeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null
    };
  }

  componentDidMount() {
    const { id } = this.props;
    if (id) {
      fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
          this.setState({ pokemon: data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { id, handleClick } = this.props;
    const { pokemon } = this.state;

    if (pokemon == null) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
      <View>
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              id +
              ".png"
          }}
          style={styles.image}
        />
        {pokemon &&
          pokemon.name && <Text>{"ID: " + id + " " + pokemon.name}</Text>}
        {pokemon &&
          pokemon.types &&
          pokemon.types[0].type.name && (
            <Text>{"Type: " + pokemon.types[0].type.name}</Text>
          )}
        <Button title="Back" onPress={handleClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
});

export default PokeView;
