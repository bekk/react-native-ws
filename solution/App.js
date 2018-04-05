import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PokeList from "./components/PokeList";
import PokeDetails from "./components/PokeDetails";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: "List",
      id: 0
    };
  }

  render() {
    const { route, id } = this.state;

    if (route === "List") {
      return (
        <View style={styles.container}>
          <PokeList
            handleClick={id => this.setState({ route: "Details", id })}
          />
        </View>
      );
    } else if (route === "Details") {
      return (
        <View style={styles.container}>
          <PokeDetails
            id={id}
            handleClick={() => this.setState({ route: "List" })}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center"
  }
});
