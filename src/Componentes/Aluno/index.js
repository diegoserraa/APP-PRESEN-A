import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Aluno() {
 return (
   <View style={styles.container}>
       <View style={styles.studentData}>
       <Image 
                source={require('../../../assets/avatar.png')}
                style={styles.logo}
                resizeMode="contain"
                />
            <Text style={styles.name}>Diego Serra De Andrade</Text>
            <Text style={styles.matricula}>201910686</Text>
       </View>
       <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>F</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#F5F5F5',
        height: 120,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginBottom: '5%',
        flex: 0.3,
        borderWidth: 2,
    
    },
    studentData: {
        marginLeft: 10,
        width: '70%',
        flexDirection: 'row',
        marginBottom: '4%'

    },
    name: {
        width: '80%',
        color: '#781e20',
        fontSize: 16,
        fontWeight: 'bold'
    },
    matricula: {
        color: '#ddd',
        fontSize: 16,
        fontWeight: '700',
        color: '#781e20',
        
    },
    button: {
        backgroundColor: '#000',
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
        height: 30,
        borderRadius: 100,
        marginTop: '10%'
    },
    buttonText: {
        color: '#FFF'
    },
    logo: {
        width: '20%',
        height: 50,
        marginLeft: 5,
        borderColor: '#fff',
    },
})