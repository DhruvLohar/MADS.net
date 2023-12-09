import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useGlobalSearchParams, useRouter } from "expo-router";
import { ArrowLeft2, DirectRight } from 'iconsax-react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';

const Messenger = () => {
    const { rid } = useGlobalSearchParams();
    const router = useRouter();

    const [msgToSend, setMsgToSend] = useState(null);
    const [messages, setMessages] = useState(["Start of the convo"]);

    const [webSocket, setWebSocket] = useState();

    const handleSendMessage = () => {
        if (webSocket) {
            messages.push("Me : " + msgToSend);
            webSocket.send(JSON.stringify({username: "Dhruv", message: msgToSend}));
            setMsgToSend(null);
        }
    }

    const handleIncomingMessage = (payload) => {
        setMessages(prev => [...prev, payload.username + " : " + payload.message])
    }

    useEffect(() => {
        const socket = new WebSocket(`ws://192.168.1.4:8000/ws/messenger/${rid}/`);
        
        socket.onopen = () => {
            console.log("Connected to server.");
            setWebSocket(socket);
        }

        socket.onmessage = (data) => {
            payload = JSON.parse(data.data);
            handleIncomingMessage(payload);
        }
    }, [])

    return (
        <View style={[LAYOUTS.screenView, { alignItems: 'center', backgroundColor: COLORS.primaryLight, paddingHorizontal: 0, position: "relative" }]}>
            <StatusBar style={"light"} backgroundColor={COLORS.primary} translucent={false} />

            <View style={styles.body}>
                <TouchableOpacity onPress={() => router.back()}>
                    <ArrowLeft2 size={30} color={COLORS.primaryLight} />
                </TouchableOpacity>

                <View style={styles.image}></View>
                <View style={{ marginLeft: 15 }}>
                    <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, fontSize: 16, fontFamily: "Poppins_500Medium" }]}>CESS & CodeCell</Text>
                    <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, fontSize: 12 }]}>
                        14 online
                    </Text>
                </View>
            </View>

            <ScrollView style={{ width: "100%", marginBottom: 70 }}>
                {messages.map((message, i) => (
                    <Text key={i}> {message} </Text>
                ))}
            </ScrollView>

            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", bottom: 5 }}>
                <TextInput
                    style={[styles.input, TYPOGRAPHY.Body, { color: COLORS.primaryLight }]}
                    placeholder={"Write your message ..."} autoComplete={"off"}
                    placeholderTextColor='gray'
                    textAlignVertical='center'

                    onChangeText={(text) => setMsgToSend(text)}
                    value={msgToSend}
                />

                <TouchableOpacity activeOpacity={.7} style={styles.sendIcon} onPress={handleSendMessage}>
                    <DirectRight size={26} rotation={-28} color={COLORS.primaryLight} />
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default Messenger;

const styles = StyleSheet.create({
    body: {
        width: '100%',
        alignSelf: "flex-end",
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
        paddingVertical: 16, paddingHorizontal: 20,
        flexDirection: "row", justifyContent: "flex-start", alignItems: "center"
    },
    image: {
        width: 50, height: 50, borderRadius: 25, backgroundColor: COLORS.primaryDark,
    },
    input: {
        width: "80%",
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 40,
        lineHeight: 28,

        backgroundColor: COLORS.primary,
        marginRight: 5
    },
    sendIcon: {
        width: 50, height: 50,
        borderRadius: 25, justifyContent: "center", alignItems: "center",
        backgroundColor: COLORS.primary
    }
})
