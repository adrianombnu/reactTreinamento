import {
    React,
    useState
} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from './style';

export default function Lista(props){
    
    const [feed, setFeed] = useState(props.data);
    
    function mostraLikes(likers){
                
        if(likers <= 0 ){
            return;
        }
    
        return(
    
            <Text style={styles.likers}>
                {likers} {likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
    
        );
    
    }
    
    function like(){
             
        if(feed.likeada === true){
               
            setFeed({

                ...feed,
                likeada: false,
                likers: feed.likers - 1  
            });
    
        }else{
             
            setFeed({
                 
                ...feed,
                likeada: true,
                likers: feed.likers + 1

            });

        }
    
    }
    
    function carregaIcone(likeada){
        return likeada ? require('../../img/likeada.png') : require('../../img/like.png')
    }
   
    return (
        <View style={styles.areaFeed}>

            <View style={styles.viewPerfil}>

                <Image
                    source={{uri: feed.imgperfil}}    
                    style={styles.fotoPerfil}
                />

                <Text style={styles.nomeUsuario}>{feed.nome}</Text>

            </View>

            <Image
                resizeMode='cover'
                style={styles.fotoPublicacao}
                source={{uri: feed.imgPublicacao}}
            />
            
            <View style={styles.areaBtn}>

                <TouchableOpacity onPress={ () => like()} >

                    <Image 
                        source={carregaIcone(feed.likeada)}
                        style={styles.iconelike}
                    /> 

                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}> 

                    <Image 
                        source={require('../../img/send.png')}
                        style={styles.iconelike}
                    />

                </TouchableOpacity>

            </View>

            { mostraLikes(feed.likers) }

            <View style={styles.viewRodape}>

                <Text style={styles.nomeRodape}>
                    {feed.nome}
                </Text>

                <Text style={styles.descRodape}>
                    {feed.descricao}
                </Text>

            </View>

        </View>
    );

} 