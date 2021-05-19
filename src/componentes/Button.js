import React from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    Text} from 'react-native'

    const Styles = StyleSheet.create({
        button: {
            fontSize: 40,
            height: Dimensions.get('window').width / 4,
            width: Dimensions.get('window').width /4,
            padding: 20,
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#888',
        },
        operation:{
            backgroundColor: '#fa8231',
        },
        tamDouble:{
            width: (Dimensions.get('window').width /4) * 2,
        }
    })

    export default props => {
        const stylesButton = [Styles.button];
        if (props.operation) stylesButton.push(Styles.operation)
        if (props.tamDouble) stylesButton.push(Styles.tamDouble)

        return(
            <TouchableHighlight onPress={()=> props.onClick(props.label)} >
                <Text style={stylesButton}>
                    {props.label}
                </Text>
            </TouchableHighlight>
        )
    }