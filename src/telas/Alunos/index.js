import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import Aluno from '../../Componentes/Aluno';
import { useNavigation } from '@react-navigation/native'

export default function Alunos() {
  const navigation = useNavigation();
 return (
   
   <View style={estilos.container}>
       
     <View style={estilos.espacoLogo}>
  
       <Image 
                source={require('../../../assets/avatar.png')}
                style={estilos.logo}
                resizeMode="contain"
                />
       <TouchableOpacity style={estilos.btn} onPress={() => navigation.navigate('EditarDados')}>
            <Text style={estilos.textoBtn}> Editar Dados </Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.btn} onPress={() => navigation.navigate('CadastrarAlunos')}>
            <Text style={estilos.textoBtn} > Cadastrar Alunos</Text>
        </TouchableOpacity>
      
     </View>
     <View style={estilos.espacoDisciplina}>
        <Text style={estilos.nomeDisciplina} >Laboratório de Aplicativos Híbridos</Text>
     </View>
     <ScrollView style={estilos.contentAlunos}>
        <Aluno />
        <Aluno />
     </ScrollView>
   </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1
  },
  contentNameDisciplina: {
    backgroundColor: '#781e20',
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameDisciplina: {
      flexDirection:'column',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    
  },
  contentAlunos: {
    marginHorizontal: 15,
    marginTop: 30
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
logo: {
    width: '30%',
    height: 60,
    marginTop: 40,
    marginBottom: 40,
    marginLeft: -30,
    borderColor: '#fff',
},
espacoLogo: {
      
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#781e20',

},
espacoDisciplina:{
    marginVertical: '5%',
    marginHorizontal:'10%'

},
nomeDisciplina:{
    fontSize: 20,

}
})