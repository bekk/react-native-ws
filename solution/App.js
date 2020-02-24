import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import List from './components/List'
import Details from './components/Details'

function App() {
  const [route, setRoute] = useState('List')
  const [id, setId] = useState(0)

  const updateState = (route, id) => {
    setRoute(route)
    setId(id)
  }

  if (route === 'Details') {
    return (
      <View style={ styles.container }>
        <Details
          id={ id }
          handleClick={ id => updateState('List', id) }
        />
      </View>
    )
  }

  return (
    <View style={ styles.container }>
      <List handleClick={ id => updateState('Details', id) } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
    flex: 1,
    paddingVertical: 80,
  }
})


export default App
