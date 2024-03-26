import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import Button, { TextButton } from "../../components/utils/Button";
import InfoPill from '../../components/utils/InfoPill';


const MADSWeekView = () => {
  const images = [
    'https://picsum.photos/id/1015/400/300',
    'https://picsum.photos/id/1018/400/300',
    'https://picsum.photos/id/1019/400/300',
    'https://picsum.photos/id/1018/400/300',
  ];

  const Carousel = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handlePress = (image) => {
      setSelectedImage(image);
    };

    return (
      <View style={styles.Container}>
        <Image source={{ uri: selectedImage }} style={styles.topBox} />
        <View style={styles.bottomRow}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={() => handlePress(image)}
            >
              <Image source={{ uri: image }} style={styles.thumbnail} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const rules = ['Supposed to be a web app.', 'Any web framework can be used.', 'No need of adding backend functionality.', 'only a working frontend is expected.'];


  return (
    <>
      <View style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", paddingBottom: 70 }]}>
        <StatusBar style={"dark"} />
        <ScrollView>

          <Text style={TYPOGRAPHY.Heading}>MADS Week is Live!</Text>
          <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", paddingVertical: 10 }}>
            <InfoPill text={"14 days left!"} />
            <InfoPill text={"Frontend"} />
            <InfoPill text={"Web Based App"} />
          </View>
          <Text style={TYPOGRAPHY.Body}>
            MADS Week is now live! Participate at par with your classmates
            and win MADS Points and realife project experience!
          </Text>
          <Carousel images={images} />
          <Text style={TYPOGRAPHY.SubTitle}>Instagram Clone Web App</Text>
          <Text style={TYPOGRAPHY.Body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean euismod arcu sed odio consectetur condimentum.
            Maecenas non ultrices massa. Nullam eget viverra est.
            Aliquam odio erat, laoreet ut ex tristique, interdum
            pretium eros.
          </Text>
          <Text style={TYPOGRAPHY.Body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean euismod arcu sed odio consectetur condimentum.
            Maecenas non ultrices massa. Nullam eget viverra est.
            Aliquam odio erat, laoreet ut ex tristique, interdum
            pretium eros.
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextButton title='start date' />
              <Text>23th Nov, 2023</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextButton title='end date' />
              <Text>23th Nov, 2023</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextButton title='submission' />
              <Text>69</Text>
            </View>


          </View>
          <Text style={[TYPOGRAPHY.SubTitle, { marginTop: 30 }]}>Rules</Text>
          <View style={styles.listContainer}>
            {rules.map((item, index) => (
              <Text key={index} style={styles.listItem}>
                • {item}
              </Text>
            ))}
          </View>

          <Text style={[TYPOGRAPHY.SubTitle, { marginTop: 30 }]}>Notes</Text>
          <View style={{ marginBottom: 30 }}>
            {rules.map((item, index) => (
              <Text key={index} style={styles.listItem}>
                • {item}
              </Text>
            ))}
          </View>
          <Button title="Submit your project" />

        </ScrollView>
        {/* <View style={[LAYOUTS.screenView, { marginTop: 30 }]}>
        </View> */}
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
  },
  topBox: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    marginTop: 30,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 10,
    marginBottom: 30,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 80,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 10,
  }
});

export default MADSWeekView;
