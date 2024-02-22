import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Status = ({route, navigation}) => {
  const { name, image } = route.params || {};
  const progress = useRef(new Animated.Value(0)).current
  const progressAnimation = progress.interpolate({
    inputRange:[0,5],
    outputRange:['0%','100%']
  })
  const statusBarHeight = getStatusBarHeight()

  useEffect(() => {
    Animated.timing(progress,{
      toValue:5,
      duration:5000,
      useNativeDriver:false,
    }).start()
  },[])

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    },5000);
    return () => {
      clearTimeout(timer)
    }
  },[])
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,

          height: 3,
          width: '100%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
          <Animated.View
            style={{
              height:'100%',
              backgroundColor:'white',
              width: progressAnimation  
            }}
          />
        </View>
      <View
        style={{
          marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,

          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{fontSize: 20, color: 'white', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
        {/* <Image
          source={image}
          style={{position: 'absolute', width: '100%', height: 600}}
        /> */}
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
          width: '100%',
        }}></View>
    </SafeAreaView>
  );
};

export default Status;
