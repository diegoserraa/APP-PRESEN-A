import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Image, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

export default function Login(){
    const navigation = useNavigation();
return (
<SafeAreaView style={estilos.container}>
            <View style={estilos.espacoLogo}>
                <Image 
                source={require('../../../assets/logo.png')}
                style={estilos.logo}
                resizeMode="contain"
                />
            </View>
            <View  style={estilos.espacoFormulario}>
            <Text style={estilos.titulo}>Area do Professor</Text>
            <Text style={estilos.label}>Matrícula</Text>
            <TextInput 
            style={estilos.input}
            placeholder="Digite sua matrícula..."
            />

            <Text style={estilos.label}>Senha</Text>
            <TextInput 
            style={estilos.input}
            placeholder="Digite sua senha..."
            secureTextEntry={true}
            />
             <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilos.botao}>
                <Text style={estilos.textoBotao}>Acessar</Text>
            </TouchableOpacity>
            </View>
            <View style={estilos.footer}>
                <Text style={estilos.textoFooter}>Copyright ©2022 Universidade de Vassouras. Todos os </Text>
                <Text style={estilos.textoFooter}>direitos reservados</Text>
            </View>
           
</SafeAreaView>


)

}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
        
    },
    espacoLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#781e20',

    },
    logo: {
        width: '100%',
        height: 100,
        marginTop: 40,
        marginBottom: 40

    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    },
    espacoFormulario: {
        flex: 1,
        paddingTop: '20%',
        paddingStart: '10%',
        paddingEnd: '10%',
      
       
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