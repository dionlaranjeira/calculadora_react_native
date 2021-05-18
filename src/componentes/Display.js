import React from 'react'
import {
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    Text,
    View} from 'react-native'

    const Styles = StyleSheet.create({
        display: {
           flex: 1,
           padding: 20,
           alignItems: 'flex-end',
           backgroundColor: 'rgba(0,0,0,6)',
           justifyContent: 'center',
        },
        displayValue:{
            color: '#fff',
            fontSize: 60,
        }
    })

    export default props => {
        return(
            <View style={Styles.display} >
                <Text numberOfLines={1} 
                style={Styles.displayValue}>
                    {props.value}
                </Text>
            </View>
        )
    }