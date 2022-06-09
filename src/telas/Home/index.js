import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

import Disciplina from '../../Componentes/Disciplina';


export default function Home(){
    const navigation = useNavigation();
return <>

<SafeAreaView style={estilos.container}>
            <View style={estilos.espacoLogo}>
                <Image 
                source={require('../../../assets/avatar.png')}
                style={estilos.logo}
                resizeMode="contain"
                />
            <TouchableOpacity style={estilos.btn} onPress={() => navigation.navigate('EditarDados')}>
                <Text style={estilos.textoBtn}> Editar Dados </Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.btn} onPress={() => navigation.navigate('CadastrarDisciplina')}>
                <Text style={estilos.textoBtn} > Cadastrar Disciplinas</Text>
            </TouchableOpacity>
            </View>
            <ScrollView >
                <Disciplina />
                <Disciplina />
                <Disciplina />
            </ScrollView>
            <View style={estilos.footer}>
                <Text style={estilos.textoFooter}>Copyright ©2022 Universidade de Vassouras. Todos os </Text>
                <Text style={estilos.textoFooter}>direitos reservados</Text>
            </View>
            
            
</SafeAreaView>


</>

}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
        
    },
    espacoLogo: {
      
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#781e20',

    },
    logo: {
        width: '30%',
        height: 60,
        marginTop: 40,
        marginBottom: 40,
        marginLeft: -30,
        borderColor: '#fff',
    },
    btn:{
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '30%',
        paddingVertical: 2,
        marginTop: 6,
        marginLeft: 5,
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45
        
    },
    textoBtn:{
        fontSize: 11,
        color: '#000',
        margin: 5

    },
    footer:{
        justifyContent: 'center',
        height: 60,
        alignItems: 'center',
        backgroundColor: '#781e20',
        paddingStart: '10%',
        paddingEnd: '10%',
        
    },
    textoFooter: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 11,
        color: '#fff'

    }




})