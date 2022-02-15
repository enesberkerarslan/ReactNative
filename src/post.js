import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Stack, Avatar } from "@react-native-material/core";


export const post = (props) => {
    return (
        <View>           
            <Stack fill center spacing={4}>
                <Avatar label={props.Name} autoColor />
            </Stack>
            <View>
                <Text>
                {props.Body}    
                asfasfasfssssssssssssssssssss
                </Text>
            </View>
        </View>
        
    )
}
