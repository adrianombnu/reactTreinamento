import React, { useState } from 'react';
import {
    View,
    Image,
    Dimensions

} from 'react-native';

import styles from './style';

export default function ListaSearch(props){

    const [screenWidth] = useState(Dimensions.get("window").width);
    const [imageSource] = useState(props.data.imageSource);
    const [numColumns] = useState(props.numColumns);
    const [tileSize] = useState(screenWidth / numColumns);
    const [backgroundColor] = useState(props.backgroundTeste);

    let img = imageSource;
    
    return (
        <View style={styles(null, backgroundColor).item}>

            <Image
                resizeMode='cover'
                style={styles(tileSize).fotoPublicacao}
                //style={{flex: 1, height: tileSize, width: tileSize, marginBottom: 5}}
                source={img}
            />
                
        </View>
    );
     
}