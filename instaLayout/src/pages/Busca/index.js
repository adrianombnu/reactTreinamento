import React, {useState} from 'react';
import ListaSearch from '../../Lista/Search';

import { 
  View, 
  TextInput, 
  FlatList
} from 'react-native';

import styles from './style';

export default function Busca(){
  
  const [numColumns] = useState(3);

  const [imagesSearch] = useState([
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
    
  ]);

  function createRows(data, columns) {

    const rows = Math.floor(data.length / columns); 

    let lastRowElements = data.length - rows * columns; 
    
    while (lastRowElements !== columns) {

      data.push({ 
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });

      lastRowElements += 1; 

    }

    return data; 

  }

  return(

    <View style={styles.container}>

      <View style={styles.areaBtnPesquisa}>

        <TextInput 
          style={styles.botaoPesquisa}
          placeholder="Search"
          inlineImageLeft='search'
          
        />
        
      </View>
             
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={createRows(imagesSearch, numColumns)}
        renderItem={ ({item}) => {
          if(item.empty){
             
            return(
              <ListaSearch data={item} backgroundTeste={"transparent"} numColumns={numColumns}/> 
            );
          }
           
          return(
            <ListaSearch data={item} backgroundTeste={"#fff"} numColumns={numColumns}/> 
          );
        }}
        numColumns={numColumns}
      />  

   </View>
  )
}
