import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
 

class App extends Component{

  constructor(props){
    super(props);
    this.state = {

      textoFrase: 'Siga os bons e aprenda com eles.',
      img : require('./src/biscoito.png'),
      textoBotao : 'Quebrar Biscoito'

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A sorte não tem nada a ver com nada, você não deve tornar sua alma cativa desse ilusório conceito.',
      'A sorte favorece só à mente preparada.',
      'O destino tem a mesma lei para todos: tira à sorte entre o humilde e o grande; a sua urna é vasta e contém todos os nomes.',
      'A sorte é uma coincidência do cruzamento das linhas paralelas do destino.',
      'Sorte é o que acontece quando a preparação encontra a oportunidade.',
      'Herói é o sujeito que teve a sorte de escapar vivo.',
      'É preciso possuir mais virtudes para manter a boa sorte do que para suportar a má sorte.',
      'A sorte combate sempre do lado do prudente.',
      'Ninguém pode manter a sorte imóvel e fazê-la durar.',
      'A persistência é o caminho do êxito.',
      'Só existe um êxito: a capacidade de levar a vida que se quer.',
      'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.',
      'A coragem não é ausência do medo; é a persistência apesar do medo.',
      'O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.',
      'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.',
      'O sucesso tem uma estranha capacidade de esconder o erro.',
      'Uma autoimagem forte e positiva é a melhor preparação possível para o sucesso.',
      'Creia em si, mas não duvide sempre dos outros.',
      'As únicas grandes companhias que conseguirão ter êxito são aquelas que consideram os seus produtos obsoletos antes que os outros o façam.',
      'Não espere, ponha em prática!'
    
    ];

  }
 
  quebraBiscoito(){

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img : require('./src/biscoitoAberto.png')

    });

  }

  render(){
    return (
      <View style={styles.container}>
        
        <View style={styles.imgViewArea}>
          
          <Image 
            source={this.state.img}
            style={styles.img}
          
          />
        
        </View>

        <View style={styles.txtViewArea}>

          <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        </View>
        
        <View style={styles.btnViewArea}>
          
          <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>

            <View style={styles.btnArea}>

              <Text style={styles.btnTexto}>{this.state.textoBotao}</Text>

            </View>

          </TouchableOpacity>
        </View>

      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEDF21',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgViewArea:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  img:{       
    width: 200,
    height: 200
  },
  txtViewArea:{
    flex: 1
  },
  textoFrase:{     
    fontSize: 20,
    color: '#900C3F',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'     
  },
  btnViewArea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#900C3F',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#900C3F'
  }
});


export default App;