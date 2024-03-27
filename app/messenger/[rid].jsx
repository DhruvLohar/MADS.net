import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useGlobalSearchParams, useRouter } from "expo-router";
import { ArrowLeft2, DirectRight } from 'iconsax-react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { API_URL } from '../../components/services/api';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAxios from '../../components/services/useAxios';
import { useAuth, WS_URL } from '../../context/Auth';

const TextMessage = ({ username, text, self, aboveIsSelf, isFirst }) => {
    const bubbleStyle = {
        alignSelf: self ? 'flex-end' : 'flex-start',
        backgroundColor: self ? COLORS.primary : COLORS.primaryDark,
        borderTopRightRadius: (self && self !== aboveIsSelf) ? 0 : 25,
        borderTopLeftRadius: ((!self && self !== aboveIsSelf) || (!self && isFirst)) ? 0 : 25,
        marginTop: (self !== aboveIsSelf || isFirst) ? 10 : 0
    };

    return (
        <View>
            {(self || (self === aboveIsSelf)) && (self || !isFirst) ? (null) : (
                <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", opacity: .6, marginTop: 5}}>
                    <View style={{width: 15, height: 15, backgroundColor: "black", borderRadius: 100, marginRight: 5}}></View>
                    <Text style={{ fontSize: 15 }}>{username}</Text>
                </View>
            )}
            <View style={[textBubbleStyles.container, bubbleStyle]}>
                <Text style={{ color: COLORS.primaryLight }}>{text}</Text>
            </View>
        </View>
    )
}

const Messenger = () => {
    const { rid } = useGlobalSearchParams();
    const router = useRouter();

    const { data, error, loaded } = useAxios(`messenger/${rid}/`)
    const { authState } = useAuth()

    const [msgToSend, setMsgToSend] = useState(null);
    const [messages, setMessages] = useState([]);

    const [webSocket, setWebSocket] = useState();

    const handleSendMessage = () => {
        if (webSocket) {
            // messages.push("Me : " + msgToSend);
            messages.push({ username: authState?.username, text: msgToSend, self: true })
            webSocket.send(JSON.stringify({ username: authState?.username, message: msgToSend }));
            setMsgToSend(null);
        }
    }

    const handleIncomingMessage = (payload) => {
        // setMessages(prev => [...prev, payload.username + " : " + payload.message])
        setMessages(prev => [...prev, { username: payload.username, text: payload.message, self: false }])
    }

    useEffect(() => {
        const socket = new WebSocket(`${WS_URL}/ws/messenger/${rid}/`);

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
            {loaded ? (
                <>
                    <StatusBar style={"light"} backgroundColor={COLORS.primary} translucent={false} />

                    <View style={styles.body}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <ArrowLeft2 size={30} color={COLORS.primaryLight} />
                        </TouchableOpacity>

                        <View style={styles.image}>
                            <Image source={{ uri: data.logo }} style={{ width: "100%", height: "100%" }} />
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, fontSize: 16, fontFamily: "Poppins_500Medium" }]}>{data.title}</Text>
                            <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, fontSize: 12 }]}>
                                {data.description}
                            </Text>
                        </View>
                    </View>

                    <ScrollView style={{ width: "100%", marginBottom: 70, paddingHorizontal: 10 }}>
                        {messages.map((message, i) => (
                            <TextMessage key={i} username={message.username} text={message.text} self={message.self} aboveIsSelf={i > 0 ? messages[i - 1].self : false} isFirst={i === 0} />
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
                </>
            ) : (<Text>Loading</Text>)}
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
        paddingVertical: 16,
        borderRadius: 40,
        lineHeight: 20,

        backgroundColor: COLORS.primary,
        marginRight: 5
    },
    sendIcon: {
        width: 60, height: 60,
        borderRadius: 30, justifyContent: "center", alignItems: "center",
        backgroundColor: COLORS.primary
    },
})

const textBubbleStyles = StyleSheet.create({
    container: {
        maxWidth: '80%',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 25,
        marginBottom: 4,
    }
})