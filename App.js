import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Modal from './Modal'

const App = () => {
  const [modal, setModal] = useState(false)

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Animated Modal RN</Text>
      <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
        <Text>Open Modal</Text>
      </TouchableOpacity>

      <Modal 
        show={modal}
        close={() => setModal(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 22
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20
  }
})

export default App