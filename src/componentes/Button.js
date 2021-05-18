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
        }
    })

    export default props => {
        return(
            <TouchableHighlight onPress={props.onClick} >
                <Text style={Styles.button}>
                    {props.label}
                </Text>
            </TouchableHighlight>
        )
    }