import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import theme from '../../theme';

import { styles } from './styles';
import { api } from '../../services/api';

export function ApiCep(){
  const [ cep, setCep ] = useState({
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  });

  const [ search, setSearch ] = useState('');

  //opção 01
  // const getCep = async () => {  
  //   // Faz uma solicitação para um usuário com um determinado ID
  //   const {data} = await api.get(`${search}/json/`)
  //   setCep(data)
  //   //inserindo o valor de cep
  //   console.log('search: ' + search);
  //   console.log(data)
  // }

  //opção 02

  const getCep = async () => {  
    // Faz uma solicitação para um usuário com um determinado ID
    await api.get(`${search}/json/`)
    .then((data) => setCep(data.data))
    
    const info01 = cep
    //inserindo o valor de cep
    console.log('search: ' + search);
    console.log(info01)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Teste de Api
      </Text>
        
      <View style={styles.content}>

            <View style={styles.buscar}>

                  <TextInput
                      style={[styles.input, {fontSize: 15}]}
                      placeholder='CEP'
                      placeholderTextColor={theme.colors.text}
                      value={search}
                      onChangeText={text => setSearch(text)}
                      maxLength={8}
                  />
                  
                  <TouchableOpacity style={styles.button} onPress={getCep}>
                    <Text style={{color: theme.colors.subtext, fontWeight: 'bold'}}>
                        Buscar
                    </Text>
                  </TouchableOpacity>

            </View>


            <View style={styles.info}>

                <Text style={styles.text}>{`Rua:  ${cep.logradouro}`}   </Text>
                <Text style={styles.text}>{`Bairro:  ${cep.bairro}`}  </Text>
                <Text style={styles.text}>{`Cidade:  ${cep.localidade}`}  </Text>
                <Text style={styles.text}>{`UF:  ${cep.uf}`}  </Text>

            </View>

      </View>
        
    </View>
  );
}