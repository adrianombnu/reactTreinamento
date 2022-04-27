import React, {Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions

} from 'react-native';

const screenWidth = Dimensions.get("window").width;

class ListaSearch extends Component{

    constructor(props){

        super(props);
        this.state = {
            imagesSearch: this.props.data,
            numColumns: this.props.numColumns,            
            tileSize: screenWidth / this.props.numColumns
        };
 
    } 

    render(){
                
        let img = this.state.imagesSearch.imageSource;
        
        return (
            <View style={styles.areaFeed}>
 
                <Image
                    resizeMode='cover'
                    //style={styles.fotoPublicacao}
                    style={{flex: 1, height: this.state.tileSize, width: this.state.tileSize}}
                    source={img}
                />
                  
            </View>
        );

    }
}

const styles = StyleSheet.create({
    areaFeed:{
        alignItems: "center",
        backgroundColor: "#000",
        flexGrow: 1,
        
        flexBasis: 0,
    },   
    fotoPublicacao:{
        flex: 1,
        //height: state.tileSize,
        //width: state.tileSize,
        
    }

});

export default ListaSearch;
