import * as React from 'react';
import PropTypes from 'prop-types';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, gStyle } from '../constants';

// components
import TouchLineItem from '../components/TouchLineItem';

// icons
import SvgBell from '../icons/Svg.Bell';
import SvgCheck from '../icons/Svg.Check';
import Header from '../components/Header';

const privacyUrl = 'https://policies.google.com/privacy?hl=en-US';

const alertSignOut = () => {
  Alert.alert(
    'Sign Out',
    'Are you sure that you want to sign out?',
    [{ text: 'No' }, { text: 'Yes' }],
    { cancelable: false }
  );
};

const More = ({ navigation }) => (
  <View style={gStyle.container}>
    <Header bg={colors.headerBarBg} title="More" />
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchLineItem
        icon={<SvgBell />}
        onPress={() => navigation.navigate('MoreNotifications')}
        showBorder
        text="Notifications"
      />
      <TouchLineItem
        icon={<SvgCheck />}
        onPress={() => navigation.navigate('MoreMyList')}
        showBorder
        text="My List"
      />
      <TouchLineItem
        onPress={() => navigation.navigate('MoreAppSettings')}
        showArrow={false}
        showBorder
        text="App Settings"
      />
      <TouchLineItem
        onPress={() => {
          navigation.navigate('ModalWebView', { url: privacyUrl });
        }}
        showArrow={false}
        text="Privacy"
      />
      <TouchLineItem onPress={() => null} showArrow={false} text="Help" />
      <TouchLineItem
        onPress={() => alertSignOut()}
        showArrow={false}
        text="Sign Out"
      />
      <Text style={styles.versionText}>
        Version
      </Text>
    </ScrollView>

  </View>
);

More.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  versionText: {
    color: colors.moreVersionText,
    fontFamily: fonts.regular,
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 16
  }
});

export default More;
