import { StyleSheet } from "react-native";

const style = (tileSize, backgroundColor) => StyleSheet.create({
    item:{
        alignItems: "center",
        backgroundColor: backgroundColor,
        flexGrow: 1,   
        flexBasis: 0,
        justifyContent: 'space-between',
        
        
        
    },   
    fotoPublicacao:{
        flex: 1, 
        height: tileSize, 
        width: tileSize,  
        
          
    },
    itemEmpty: {
        backgroundColor: backgroundColor
    },
});

export default style;