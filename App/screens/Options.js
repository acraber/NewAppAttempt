import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    SafeAreaView,
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
    },
    title: {
        color: colors.text,
        fontSize: 16,
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
    },
    toppadding:{
        paddingTop: 35
    },
    // this is what makes everything centered
    safeareaview:{
        justifyContent: 'center', // Centered vertically
        alignItems: 'center', // Centered horizontally
        flex:1
    }
});

export default () => {
    return (
      <SafeAreaView style={styles.safeareaview}>

        <TouchableOpacity onPress={() => alert('todo!')} style={styles.row}>
          <Text style={styles.title}>Themes</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity onPress={() => alert('todo!')} style={styles.row}>
          <Text style={styles.title}>React. Native Basics</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity onPress={() => alert('todo!')} style={styles.row}>
          <Text style={styles.title}>React Native by Example</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
};