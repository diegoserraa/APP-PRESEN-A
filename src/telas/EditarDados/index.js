import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';





export default function CadastrarAlunos(){
    const navigation = useNavigation();
return <>

<SafeAreaView style={estilos.container}>
            <View style={estilos.espacoLogo}>
                <Image 
                source={require('../../../assets/avatar.png')}
                style={estilos.logo}
                resizeMode="contain"
                />
           
            </View>
          <View style={estilos.espacoFormulario}>
          <Text style={estilos.label}>Nome:</Text>
            <TextInput 
            style={estilos.input}
            placeholder="Digite o nome..."
            value = "Tassio Sirqueira"
            />

            <Text style={estilos.label}>Email:</Text>
            <TextInput 
            style={estilos.input}
            placeholder="Digite o email..."
            value = "Tassio@hotmail.com"
            />
             <Text style={estilos.label}>Data Nascimento:</Text>
            <TextInput 
            style={estilos.input}
            placeholder="Digite sua Matricula..."
            value = "20/10/1990"
            />
             <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilos.botao}>
                <Text style={estilos.textoBotao}>Salvar</Text>
            </TouchableOpacity>
          </View>
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
        marginRight: 250 ,
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

    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28
    },
    input: {
        borderBottomWidth: 0.5,
        fontSize: 16,
        height: 40,
        marginBottom: 12
    },
    botao: {
        backgroundColor: '#781e20',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    espacoFormulario: {
        flex: 1,
        paddingTop: '20%',
        paddingStart: '10%',
        paddingEnd: '10%',
         
    },

})