import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import estilo from '../estilo/estilo.js';

export default function Form(){
    return(


        <View
        style={estilo.box}>

        <TextInput style={estilo.inputs} placeholder= 'e-mail' />
  
  <TextInput style={estilo.inputs}   placeholder= 'senha' />

  <TouchableOpacity style={{width:'80%'}}> 
      <LinearGradient
      // Background Linear Gradient
       colors={['#D2691E','#FF4500']}
       style={estilo.button}
      >
          <Text style={{fontWeight:'bold',color:'white'}}>LOGAR</Text>
       </LinearGradient>
  </TouchableOpacity>





  </View>
    )
    }
