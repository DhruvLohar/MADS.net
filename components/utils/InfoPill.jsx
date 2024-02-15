import React from 'react'
import { View,Text } from 'react-native'
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';

const InfoPill = ({text}) => {
  return (
    <View style={{backgroundColor:COLORS.primaryDark, minWidth:40, borderRadius:25,justifyContent:'center',alignItems:'center', padding:10}}>
        <Text style={{color: COLORS.primaryLight}}>{text}</Text>
    </View>
  )
}

export default InfoPill;
