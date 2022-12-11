import React, { useState, useEffect } from 'react'
import {ScrollView, Text, View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import DocumentScanner from 'react-native-document-scanner-plugin'
import {colors, gStyle} from "../constants";
import Header from "../components/Header";
import {useScrollToTop} from "@react-navigation/native";
import RNFetchBlob from 'rn-fetch-blob'

export default () => {
  const [scannedImage, setScannedImage] = useState();
  const dirs = RNFetchBlob.fs.dirs;


  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument({
      responseType: 'base64',
    });

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0])
      console.log(typeof scannedImages[0])
      console.log(scannedImages[0].slice(0,15))
      console.log(dirs)
    }
  }

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

  useEffect(() => {
    // call scanDocument on load
    scanDocument()
  }, []);

  const ref = React.useRef(null);
  useScrollToTop(ref);

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
          <Text>
            This is testing screen

          </Text>

          <Image
              style={{ width: 500, height: 500 }}
            source={{ uri: `data:image/png;base64,${scannedImage}` }}
          />

          <View style={gStyle.spacer3} />

        </ScrollView>
      </View>
  )
}