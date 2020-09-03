import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9C4C25',
      
    },

    title: {
        fontSize: 40,
        fontFamily: 'Poppins_400Regular',
        color: '#FFF07F',
        marginTop: 20,    
        alignSelf:'center',
        fontWeight: 'bold',

    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:500,
        backgroundColor:'#FFF398',
        width: '100%',
        resizeMode: 'contain',
        alignItems: 'center' //centraliza e coloca lá para direita o que estava escrito no header


    },

    button: {
        alignItems: 'center', //centraliza e coloca lá para direita o que estava escrito no header


    },


    buttonPrimary:{
        marginTop: 3,
        paddingHorizontal: 30,

    },
    
    buttonSecondary:{
        marginTop: 8,

    },

    buttonTertiary:{
        marginTop: 3,
        paddingHorizontal: 30,
        
    },
    buttontext1:{
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        fontSize: 10,
        marginTop: 6,

    },
    buttontext2:{
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        fontSize: 10,
        marginTop: 8,

    
    },
    buttontext3:{
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        fontSize: 10,
        marginTop: 2,
        
    },

});

export default styles;