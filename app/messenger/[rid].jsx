import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useGlobalSearchParams, useRouter } from "expo-router";
import { ArrowLeft2, DirectRight } from 'iconsax-react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { API_URL } from '../../components/services/api';
import { SafeAreaView } from 'react-native-safe-area-context';

const TextMessage = ({ username, text, self }) => {
    return (
        <View style={[styles.textMessageContainer, self && styles.textSelf, !self && styles.textUser]}>
            <Text>{username}: {text}</Text>
        </View>
    )
}

const Messenger = () => {
    const { rid } = useGlobalSearchParams();
    const router = useRouter();

    const [msgToSend, setMsgToSend] = useState(null);
    const [messages, setMessages] = useState([]);

    const [webSocket, setWebSocket] = useState();

    const handleSendMessage = () => {
        if (webSocket) {
            // messages.push("Me : " + msgToSend);
            messages.push({username: "Dhruv", text: msgToSend, self: true})
            webSocket.send(JSON.stringify({username: "Dhruv", message: msgToSend}));
            setMsgToSend(null);
        }
    }

    const handleIncomingMessage = (payload) => {
        // setMessages(prev => [...prev, payload.username + " : " + payload.message])
        setMessages(prev => [...prev, {username: payload.username, text: payload.message, self: false}])
    }

    useEffect(() => {
        const socket = new WebSocket(`ws://172.20.10.3:8000/ws/messenger/3d4d8495-fb6f-481c-98c9-3aa3822babd4/`);
        
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
        <SafeAreaView style={[LAYOUTS.screenView, { alignItems: 'center', backgroundColor: COLORS.primaryLight, paddingHorizontal: 0, position: "relative" }]}>
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
                    // <Text key={i}> {message} </Text>
                    <TextMessage key={i} username={message.username} text={message.text} self={message.self} />
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
        </SafeAreaView>

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
        width: 60, height: 60,
        borderRadius: 30, justifyContent: "center", alignItems: "center",
        backgroundColor: COLORS.primary
    },

    textMessageContainer: {
        flex: 1,
        width: "100%",
        maxWidth: 200,
        justifyContent: "center",

        paddingHorizontal: 10,
        paddingVertical: 20,
        marginBottom: 10,

        borderRadius: 10,
        color: COLORS.primaryLight,
        marginHorizontal: 20
    },
    textSelf: {
        alignItems: "flex-end",

        backgroundColor: COLORS.primaryLight,
        color: COLORS.primaryLight,
        borderTopRightRadius: 0
    },
    textUser: {
        alignItems: "flex-start",

        backgroundColor: COLORS.primaryDark,
        color: COLORS.primaryLight,
        borderTopLeftRadius: 0
    }
})
