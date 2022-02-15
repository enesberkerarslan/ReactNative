import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import {
  StyleSheet, Text, View, ScrollView, Dimensions,
  TouchableOpacity, Modal, Button, SafeAreaView, FlatList, ActivityIndicator,RefreshControl
} from 'react-native';
import { Stack, Avatar } from "@react-native-material/core";
const { height, width } = Dimensions.get('window');
import axios from 'axios';
const jsondata = require('./post.json');

const Feed = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (

    <View>
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', maxWidth: width*0.98, marginTop: 20, borderWidth: 1 }} onPress={() => {
        setModalVisible(true)
      }
      }>
        <View style={{ padding: 8 }}>
          <Avatar image={{ uri: props.url }} />

        </View>
        <View style={{ display: 'flex', flexDirection: 'column', maxWidth: 240 }}>
          <Text style={{ padding: 8 }}> {props.name}</Text>

          <Text style={{ marginTop: 45 }}> {props.body}</Text>

        </View>
      </TouchableOpacity>
      <Modal

        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <Button
                onPress={() => {
                  setModalVisible(false)
                }}
                title="Back Feed"
                accessibilityLabel="Learn more about this purple button"
              />
              <View style={{alignItems: 'center',marginTop:15}}>

                <Avatar image={{ uri: props.url }} />
              </View>
              <View style={{alignItems: 'center',marginTop:25}}>
              <Text > {props.name}</Text>
              <Text style={{marginTop:25}}> {props.body}</Text>
              </View>

            </View>
          </View>
        </View>

      </Modal>
    </View>

  );
}

const name = 'name'
const body = 'bodyassssssssssssssssssssss sssssssssssss ssssssss ssssssssssss ssssss sssss'
const url = "https://mui.com/static/images/avatar/1.jpg"

export default function App() {
  const handleCharacterNumber = value => setModalVisible(value);
  // <Feed name={name} body={body} url={url} onhandleCharacterNumber={handleCharacterNumber} modalVisible={modalVisible} /> 
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    setPosts(jsondata)

  }, []);

  return (
    <View style={styles.container}>

      <FlatList data={posts} keyExtractor={item => item.id} 
      renderItem={({ item }) =>

        <Feed name={item.name} body={item.body} url={item.url} />
      }>


      </FlatList>


    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:35,
    marginVertical: width * 0.05,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerModal: {
    flex: 1,
    marginTop:10,
    marginVertical: width * 0.05,
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
