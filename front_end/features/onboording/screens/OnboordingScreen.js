import { StyleSheet, Text, View, Image, TouchableOpacity , FlatList } from "react-native";
import React, { useRef } from "react";
import { dummyData } from "../data/data";
import {useWindowDimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { Video, ResizeMode } from 'expo-av';

const OnboordingScreen = ({ navigation }) => {
  
  const {height, width} = useWindowDimensions();
  const animation = useRef(null);
  return (
    <View style={{ alignSelf: "center", backgroundColor: "white" }}>
      <StatusBar hidden={true} />
      <FlatList
        data={dummyData}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{  alignSelf: "center" , width ,  }}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    
                    height: 250,
                    backgroundColor: '#F5F5F5',
                    ResizeMode : 'cover',
                    
                alignSelf :'center'
                }}
                source={item.image}
            />
            <View style={{}}>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 17,
                  marginTop: 15,
                  paddingHorizontal: 50,
                  color: "black",
                  textAlign :'center'
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
        horizontal
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        
        style={{
          padding: 12,
          position: "absolute",
          bottom: 50,
          width: "100%",
          backgroundColor: "#F5F5F5",
          borderRadius: 30,
          
        }}
      >
        <Text
          style={{
            fontWeight: "300",
            fontSize: 14,
            alignSelf: "center",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={{
          height: 40,
          
        }}
      >
        <Text
          style={{
            color: "black",
            alignSelf: "center",
            fontWeight: "bold",
            position: "absolute",
            bottom: 20,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboordingScreen;

const styles = StyleSheet.create({});
