import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Modal, Button, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { Stack, Avatar } from "@react-native-material/core";
const { height, width } = Dimensions.get('window');
import axios from 'axios';
const jsondata = require('./post.json');

const Feed = (props) => {
  return (
    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', maxWidth: 320, marginTop: 20, borderWidth: 1 }} onPress={() => {
      props.onhandleCharacterNumber(!props.modalVisible)
    }
    }>
      <View style={{ padding: 8 }}>
        <Avatar image={{ uri: props.url }} />

      </View>
      <View style={{ display: 'flex', flexDirection: 'column', maxWidth: 240 }}>
        <Text style={{ padding: 8 }}> {props.name}</Text>

        <Text style={{ marginTop: 45 }}> {props.body}</Text>

      </View>
      <Modal

        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <Button
                onPress={() => {
                  props.onhandleCharacterNumber(!props.modalVisible)
                }}
                title="Back Feed"
                accessibilityLabel="Learn more about this purple button"
              />
              <View style={{ padding: 8 }}>

                <Avatar image={{ uri: props.url }} />
              </View>
              <Text style={{ padding: 8 }}> {props.name}</Text>
              <Text style={{ marginTop: 45 }}> {props.body}</Text>

            </View>
          </View>
        </View>

      </Modal>
    </TouchableOpacity>
  );
}

const name = 'name'
const body = 'bodyassssssssssssssssssssss sssssssssssss ssssssss ssssssssssss ssssss sssss'
const url = "https://mui.com/static/images/avatar/1.jpg"

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleCharacterNumber = value => setModalVisible(value);
  // <Feed name={name} body={body} url={url} onhandleCharacterNumber={handleCharacterNumber} modalVisible={modalVisible} /> 
  const [posts, setPosts] = useState([])

  const [photos, setPhotos] = useState([])

  const [users, setUsers] = useState([])



  useEffect(() => {
    setPosts(jsondata)
    
  }, []);

  return (
    <View style={styles.container}>

      <FlatList data={posts} keyExtractor={item => item.id} renderItem={({ item }) =>
        
        <Feed name={item.name} body={item.body} url={item.url} onhandleCharacterNumber={handleCharacterNumber} modalVisible={modalVisible} />
      }>


      </FlatList>


    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: width * 0.125,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});
