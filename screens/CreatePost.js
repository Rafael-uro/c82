import * as React from "react"
import {
    Text,
    View,
    StyleSheet,
    
} from "react-native"


export default class CreatePost extends React.Component {
    render(){  
        
        return(
            <View style = {styles.container}>
                <Text>
                    CreatePost
                </Text>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });