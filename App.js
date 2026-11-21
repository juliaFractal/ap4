import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

const nombre = () => {
  return (
    <View style={styles.container}>
      <Text>Julia Molina Gonzalez</Text>
    </View>
  );
}

const data = () => {
  const estilo ="upv";
  const isAdmin = true;
  const modulos2Dam = [
    { nombre: 'DIN', profesor: 'Manel', horas: 120 },
    { nombre: 'ADA', profesor: 'Juanmi', horas: 120 },
    { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
    { nombre: 'PSP', profesor: 'Fran', horas: 60 },
    { nombre: 'SGE', profesor: 'Belén', horas: 100 },
    { nombre: 'Inglés', profesor: 'Caterina', horas: 40 },
    { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
  ];
  return (
    <View>
      {estilo==="upv"?
        <View style={styles.upv}>
          <TextInput
            style={{ height: 40 }}
            placeholderTextColor="orange"
            placeholder="Introduce tus datos"
            value=''
          />
          <TextInput
            style={{ height: 40 }}
            placeholderTextColor="orange"
            placeholder="Introduce tus datos"
            value=''
          />
        </View>:
        <View style={styles.florida}>
          <TextInput
            style={{ height: 40 }}
            placeholderTextColor="white"
            placeholder="Introduce tus datos"
            value=''
          />
          <TextInput
            style={{ height: 40 }}
            placeholderTextColor="white"
            placeholder="Introduce tus datos"
            value=''
          />
        </View>
      }
      {
        isAdmin &&
          <Pressable style={styles.button}>
              <Text style={{textAlign: 'center', color: 'white'}}>INFORMES</Text>
          </Pressable>
      }
      {
        modulos2Dam.map((element, index)=>(
          <View style={{backgroundColor: index%2===0?'#F48FB1': '#F8BBD0'}} >
            <Text>{index+1}</Text>
            <Text>{element.nombre}</Text>
            <Text>{element.profesor}</Text>
            <Text>{element.horas} horas</Text>
          </View>
        ))
      }
    </View>
  );
}

class App extends Component {
    render() {
        return (
          <View style={styles.container}>
            {nombre()}
            {data()}
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 52,
        paddingHorizontal: 24,
    },
    upv: {
      backgroundColor: 'purple',
      fontSize: 10,
      fontWeight: '600',
      padding: 4,
      paddingLeft: 12,
      textAlign: 'left',
    },
    florida: {
      backgroundColor: 'red',
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    button: {
      backgroundColor: 'blue',
      ontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
    }
});

export default App;