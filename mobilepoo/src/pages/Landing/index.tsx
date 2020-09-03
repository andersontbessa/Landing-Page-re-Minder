import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

import check from '../../assets/images/icons/check.png';
import lupa from '../../assets/images/icons/lupa.png';
import post from '../../assets/images/icons/post.png';

function Landing() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>re-Minder</Text>
        
            <View style ={styles.buttonsContainer}>
                  
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}> 
                    <Image source={check} /> 
                    <Text style ={styles.buttontext1}>CHECKLIST </Text>


                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.button, styles.buttonSecondary]}> 
                    <Image source={lupa} /> 
                    <Text style ={styles.buttontext2}>PESQUISAR </Text>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonTertiary]}>
                    <Image source={post} />
                    <Text style ={styles.buttontext3}>POST-IT </Text>


                </TouchableOpacity>
                
                

            </View>
        </View>  
      

    );
    
}
export default Landing;