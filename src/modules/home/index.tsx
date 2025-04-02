import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

export const HomeModule = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>HOME PAGE</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
