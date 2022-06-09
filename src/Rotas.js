import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './telas/Login';
import Home from './telas/Home';
import Alunos from './telas/Alunos';
import CadastrarDisciplina from './telas/CadastrarDisciplina';


const Stack = createNativeStackNavigator();

function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="Home"
            component={Home}
         
            />
              <Stack.Screen 
            name="Alunos"
            component={Alunos}
         
            />
              <Stack.Screen 
            name="CadastrarDisciplina"
            component={CadastrarDisciplina}
         
            />
          
         
        </Stack.Navigator>
    )
}

export default Rotas;