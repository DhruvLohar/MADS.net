import React, { memo, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import Tab from '../../components/utils/Tab';
import { ArrowRight2 } from 'iconsax-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Card = ({ image }) => {
    return (
        <View style={{ width: '100%', backgroundColor: COLORS.primaryDark, borderRadius: 20, paddingVertical: 30, paddingHorizontal: 20, marginBottom: 20 }}>
            <Text style={[TYPOGRAPHY.Heading, { color: COLORS.primaryLight, fontSize: 25, marginBottom: 8 }]}>Lorem Ipsum</Text>
            <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, fontSize: 14 }]}>
                Holiday would be declared on 30th Nov 2023, according
                to he rules and guidelines attached below.
                ~ Principle
            </Text>
            {image ? (
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.primary, borderRadius: 20, paddingHorizontal: 20, paddingVertical: 15, marginTop: 20 }}>
                    <Text style={[TYPOGRAPHY.BodyInfo, { color: COLORS.primaryLight, fontSize: 14 }]}>Open attachment ...</Text>
                    <ArrowRight2 size={20} color={COLORS.primaryLight} />
                </TouchableOpacity>
            ) : null}
        </View>
    )
}

const CollegeNotices = memo(() => {
    return (
        <View style={{ width: "100%" }}>
            <Card image={true} />
            <Card image={false} />
            <Card image={true} />
        </View>
    )
});

const ClassNotices = memo(() => {
    return (
        <View style={{ width: '100%' }}>
            <Text>Class room updates</Text>
        </View>
    );
})

const CollgeNoticeView = () => {
    const tabs = ["College", "Classroom"];
    const [active, setActive] = useState(tabs[0]);

    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", paddingBottom: 60 }]}>
            <StatusBar style={"dark"} />

            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 20, marginTop: 10 }}>
                {tabs.map((item, idx) => (
                    <Tab key={idx} title={item} isActive={active === item} switchTab={() => setActive(item)} />
                ))}
            </View>
            <ScrollView>
                {active === tabs[0]
                    ? <CollegeNotices />
                    : <ClassNotices />
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default CollgeNoticeView;