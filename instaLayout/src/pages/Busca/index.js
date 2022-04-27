import React  from 'react';
import ListaSearch from '../../Lista/Search';

import { 
  View, 
  TextInput,
  StyleSheet,  
  FlatList

} from 'react-native';

const numColumns = 3;

const imagesSearch= [
  {
    id: '1', 
    imageSource: require('../../img/search/18530_709031C7E86A301C.webp')
  },
  {
    id: '2', 
    imageSource: require('../../img/search/20210418_F1_EmiliaRomagna_LewisHamilton_01_Mercedes.jpeg'),
  },
  {
    id: '3', 
    imageSource: require('../../img/search/basquete-nba-jogadores-vovos-betsultq7.jpg'),
  },
  {
    id: '4', 
    imageSource: require('../../img/search/brasil-tem-duas-praias-entre-as-cinco-melhores-do-mundo.webp'),
  },
  {
    id: '5', 
    imageSource: require('../../img/search/selva.webp'),
  },
  {
    id: '6', 
    imageSource: require('../../img/search/Formula-1-2021-Band-transmisao.jpg'),
  },
  {
    id: '7', 
    imageSource: require('../../img/search/Fotolia_175939586_Subscription_Monthly_M-1200x800-1.jpg'),
  },
  {
    id: '8', 
    imageSource: require('../../img/search/fundo-de-selva-de-desenho-animado_23-2148963536.webp'),
  },
  {
    id: '9', 
    imageSource: require('../../img/search/machu-picchu-11.webp'),
  },
  {
    id: '10', 
    imageSource: require('../../img/search/machu-pichu.webp'),
  },
  {
    id: '11', 
    imageSource: require('../../img/search/Praia-Vermelha_Zarpo.jpg'),
  },
  {
    id: '12', 
    imageSource: require('../../img/search/praias-brasil-sancho.jpg'),
  },
  {
    id: '13', 
    imageSource: require('../../img/search/retorno-aos-treinos-de-corrida-780x450.jpg'),
  },
  {
    id: '14', 
    imageSource: require('../../img/search/thinkstockphotos-531912454.webp')
  }
   
];
 

export default function Busca(){

  return(
    <View style={styles.container}>

      <View style={styles.areaBtnPesquisa}>

        <TextInput 
          style={styles.botaoPesquisa}
          placeholder="Digite sua pesquisa"
          
        />
        
      </View>
             
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={imagesSearch}
        renderItem={ ({item}) => <ListaSearch data={item} numColumns={numColumns}/> }
        numColumns={numColumns}
      />  

   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
     
  },
  areaBtnPesquisa:{
    height: 60,     
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'

  },
  botaoPesquisa:{     
    borderRadius: 10,
    backgroundColor: '#EBE9E9',
    height: 45,
    width: '98%',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    fontFamily: 'Roboto'
    
  }
});