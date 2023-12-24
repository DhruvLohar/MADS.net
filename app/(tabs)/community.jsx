import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const RoomCard = ({ room }) => {

    const router = useRouter();

    const cardStyles = StyleSheet.create({
        body: {
            width: '100%',
            alignSelf: "flex-end",
            backgroundColor: COLORS.primary,
            borderRadius: 14,
            paddingVertical: 14, paddingHorizontal: 25, marginBottom: 5,
            flexDirection: "row", justifyContent: "flex-start", alignItems: "center"
        },
        image: {
            width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.primaryDark,
        }
    })

    return (
        <TouchableOpacity activeOpacity={0.8} style={cardStyles.body} onPress={() => router.push(`/messenger/${room.rid}`)}>
            <View style={cardStyles.image}></View>
            <View style={{ marginLeft: 15 }}>
                <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, fontSize: 16, fontFamily: "Poppins_500Medium" }]}>{room.title}</Text>
                <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, fontSize: 12 }]}>
                    {room.department}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const CommunityView = () => {

    const rooms = [
        { rid: "asdas-asdasd-asdsa", title: "CESS and CodeCell", department: "Computer Engg." },
        { rid: "3d4d8495-fb6f-481c-98c9-3aa3822babd4", title: "Entrepreneurship Cell", department: "Computer Engg." },
        { rid: "asdas-asdasd-asdsa", title: "ABIT", department: "Information Technology" },
    ]

    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", paddingBottom: 60 }]}>
            <StatusBar style={"dark"} />

            <Text style={[TYPOGRAPHY.SubTitle, { fontFamily: "Poppins_500Medium", marginTop: 20 }]}>Trending Committees</Text>
            <Text style={[TYPOGRAPHY.Body]}>Interact and text with the people belong to the top committees from your college!</Text>

            <ScrollView style={{ marginTop: 15, width: '100%' }}>
                <View style={{ width: '100%' }}>
                    {rooms.map((room, i) => (
                        <RoomCard key={i} room={room} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default CommunityView;