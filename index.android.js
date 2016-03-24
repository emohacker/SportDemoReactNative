'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

var Icon = require('react-native-vector-icons/Ionicons');


var DEFAULT_URL = 'http://10.70.95.205:8000/dist/html/home/home-index.html';

var QQSportDemo = React.createClass({
  render: function() {
    return (
      <View style={{flex:1}}>
        <WebView style={styles.webview}
          source={{uri: DEFAULT_URL}}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          >
        </WebView>
        <View style={styles.tabBar}>
          <View style={styles.btnHome}>
            
            <Text style={{fontSize:12,color:'#fff'}}>首页</Text>
          </View>
          <View style={styles.btnCamera}></View>
          <View style={styles.btnEx}></View>
        </View>
      </View>
    );
  },
});
var styles = StyleSheet.create({
    webview:{
      backgroundColor:'#fff',
    },
    tabBar:{
      borderTopWidth:1,
      borderTopColor:'#e9e9e9',
      height:54,
      backgroundColor:'#fff',
      flexDirection:'row',
    },
    btnHome:{
      flex:1.5,
      height:54,
      backgroundColor:'#000',
      alignItems: 'center',
    },
    btnCamera:{
      flex:1,
      height:54,
      backgroundColor:'#fafafa'
    },
    btnEx:{
      flex:1.5,
      height:54,
      backgroundColor:'#444',
    }
});

AppRegistry.registerComponent('QQSportDemo', () => QQSportDemo);
