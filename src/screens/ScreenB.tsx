import React from 'react';
import { View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenB() {
    const navigation = useNavigation();
   
    function openScreen(){
        navigation.navigate('screenA');
    }
    return (
        <View style={{ flex: 1, backgroundColor:'blue', justifyContent: 'center'}}>
            <Button 
             title="Ir para a tela A"
             onPress={openScreen}
          />

        </View>
    );
}