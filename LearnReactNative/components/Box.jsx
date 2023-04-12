import React from 'react';
import {View, StyleSheet} from 'react-native';

function Box({rounded, size, color}) {
    return (
        <View 
            style={[styles.box, rounded && styles.rounded, styles[size], {backgroundColor: color}]} 
        />
    );
}

Box.defaultProps = {
    size: 'medium',
    color: 'blue',
};

const styles = StyleSheet.create( {
    box: {
        backgroundColor: 'black',
    },
    rounded: {
        borderRadius: 16,
    },
    small: {
        width: 32,
        height: 32,
    },
    medium: {
        width: 64,
        height: 64,
    },
    large: {
        width: 128,
        height: 128,
    },
});


export default Box;
