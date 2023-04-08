import { StyleSheet, Text, View,TextInput ,Button} from 'react-native'
import React, { useState } from 'react'

export default function AddTodo( {submitHandler}) {

const [text,setText] = useState('');

const changeHanddler = (val) => {
    setText(val);
}
  return (
    <View>
      <TextInput 
      style={styles.input}
      placeholder='new todo..'
      onChangeText={changeHanddler}
      
      />

      <Button onPress={() => submitHandler(text)} title='Add todo' color='coral'/>
     
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    }
})