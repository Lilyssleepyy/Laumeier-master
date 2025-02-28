import React from "react";
// import styled from "styled-components/native";
import { Text, View, SafeAreaView, Button, Alert } from "react-native";
// import { SafeArea } from ".../spacer/safe-area.components.js";

export const ExhibitsScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 30, marginLeft: 15}}>
        <Text>ARTWORKS ON VIEW</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 15, marginLeft: 15 }}>
        <Text>CURRENT EXHIBITION/FOREST THROUGH THE TREES</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'flex-start',  marginTop: 15, marginLeft: 15   }}>
        <Text>CURRENT EXHIBITION/ JEAN SHIN: HOME BASE</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'flex-start',  marginTop: 15, marginLeft: 15   }}>
        <Text>PAST EXHIBITIONS</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'flex-start',  marginTop: 15, marginLeft: 15   }}>
        <Text>SITE/SOUND PROJECT</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'flex-start',  marginTop: 15, marginLeft: 15   }}>
        <Text>40TH ANNIVERSARY</Text>
      </View>
      <View style= {{marginBottom: 15}}>
        <Button
            title='test1'
            onPress = { () => Alert.alert('test 1 worked')}
            color= '#f194ff'
        />
      </View>
      <Button
        title='test2'
        onPress= { () => Alert.alert('test 2 works')}
      />

    </SafeAreaView>
  );
};