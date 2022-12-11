import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, gStyle} from '../constants';

// components
import Cast from '../components/Cast';
import Header from '../components/Header';

// icons
import SvgDownloads from '../icons/Svg.Downloads';

const Downloads = () => {

    return (
        <View style={gStyle.container}>
            <Header bg={colors.headerBarBg} title="My Downloads"/>


        </View>
    );
}

const styles = StyleSheet.create({
    containerIcon: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.downloadsIconBg,
        borderRadius: 96,
        height: 140,
        justifyContent: 'center',
        marginBottom: 32,
        marginTop: 48,
        width: 140
    },
    description: {
        alignSelf: 'center',
        color: colors.white,
        fontFamily: fonts.regular,
        fontSize: 16,
        marginBottom: 48,
        textAlign: 'center',
        width: 300
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: colors.white,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        padding: 16
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        textAlign: 'center'
    }
});

export default Downloads;
