import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Disciplina() {

    const navigation = useNavigation();

 return <>
    <TouchableOpacity style={estilos.container} onPress={() => navigation.navigate('Alunos')}>
        <View style={estilos.espacoBotao}>
            <Text style={estilos.textoBotao}>Laboratório de Aplicativos Híbridos</Text>
            <Text style={estilos.textoBotao}>Ano: 2022 </Text>
            <Text style={estilos.textoBotao}>Semestre: 2</Text>
        </View>
    </TouchableOpacity>
  </>;
}

const estilos = StyleSheet.create({
    container: {
        paddingVertical: 1,
        marginTop: 30
    },
  
    textoBotao: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#781e20',
      
    },
    espacoBotao: {
        marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        
        marginEnd:800,
        height: 110,
        width: '86%',
        flex: 0.3,
        borderWidth: 2,
    
    }
})