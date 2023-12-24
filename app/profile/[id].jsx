import React, { memo, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';

import { useGlobalSearchParams } from "expo-router";
import Tab from '../../components/utils/Tab';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Setting2 } from 'iconsax-react-native';

const ShowProjects = memo(() => {
  return (
    <View>
      <Text>Show Projects</Text>
    </View>
  );
})

const ShowDetails = memo(() => {
  return (
    <View>
      <Text>Show Details</Text>
    </View>
  );
})

const Profile = () => {
  const { id } = useGlobalSearchParams();

  const tabs = ['Details', 'Projects'];
  const [active, setActive] = useState(tabs[0]);

  const ActiveTab = useMemo(() => { }, [active])

  return (
    <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { alignItems: 'center', backgroundColor: COLORS.primaryLight }]}>
      <StatusBar style={"light"} backgroundColor={COLORS.primaryDark} />

      {/* Header */}

      <View style={styles.bgEllipse}></View>
      <Image style={styles.imageCircle} source={require("../../assets/profile.jpeg")} />

      <Text style={TYPOGRAPHY.Heading}>Sara Jones</Text>
      <Text style={[TYPOGRAPHY.Body, { textAlign: 'center' }]}>Love learning about fullstack development and exploring Artifical Intelligence</Text>

      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <View style={{ alignItems: 'center', marginRight: 20 }}>
          <Text style={[TYPOGRAPHY.Header, { opacity: .6 }]}>MADS POINTS</Text>
          <Text style={TYPOGRAPHY.SubTitle}>69</Text>
        </View>
        <View style={{ alignItems: 'center', marginLeft: 20 }}>
          <Text style={[TYPOGRAPHY.Header, { opacity: .6 }]}>PROJECTS</Text>
          <Text style={TYPOGRAPHY.SubTitle}>4</Text>
        </View>
      </View>

      <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 30 }}>
        {tabs.map((item, idx) => (
          <Tab key={idx} title={item} isActive={active === item} switchTab={() => setActive(item)} />
        ))}
      </View>
      <ScrollView>
        {active === tabs[0]
          ? <ShowDetails />
          : <ShowProjects />
        }
      </ScrollView>
    </SafeAreaView>
  );
}
export default Profile;

const styles = StyleSheet.create({
  bgEllipse: {
    width: Dimensions.get('screen').width + 60,
    height: 120,
    backgroundColor: COLORS.primaryDark,
    borderBottomRightRadius: 400,
    borderBottomLeftRadius: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageCircle: {
    width: 150,
    height: 150,
    borderRadius: 200,
    objectFit: 'contain',
    borderColor: COLORS.primaryLight,
    borderWidth: 5, 
    marginTop: -100,
    marginBottom: 10
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    margin: 10,
    width: 300,
    height: 300
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    margin: 10,
  },
  pillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  pill: {
    backgroundColor: '#0B2B26',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  pillText: {
    color: 'white',
    fontSize: 14,
  },
});
