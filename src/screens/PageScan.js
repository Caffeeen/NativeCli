import * as React from 'react';
import { ScrollView, Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import {colors, gStyle} from '../constants';

import { Image } from 'react-native'
import DocumentScanner from 'react-native-document-scanner-plugin'
import Header from "../components/Header";

import {useNavigation} from "@react-navigation/native";


const PageScan = () => {
  // on active tab press, scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  const navigation = useNavigation()

  // local state
  const [showHeader, setShowHeader] = React.useState(true);
  const [offset, setOffset] = React.useState(0);

  const onScroll = (event) => {
    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < offset;

    if (show !== showHeader || offset <= 0) {
      // account for negative value with "bounce" offset
      if (offset <= 0) show = true;

      setShowHeader(show);
    }

    setOffset(currentOffset);
  };

  return (
    <View style={gStyle.container}>
      <Header bg={colors.headerBarBg}/>
      <ScrollView
        ref={ref}
        bounces
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >

        <TouchableOpacity
          style={styles.button}
            onPress={() => navigation.navigate('PageScan')}
        >
          <Text>Testing Nav</Text>
        </TouchableOpacity>

        <View style={gStyle.spacer3} />

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#FFF',
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default PageScan;
