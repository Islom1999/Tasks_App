import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

const colors = {
  themeColor: '#4263ec',
  white: '#ffffff',
  background: '#f4f6f0',
  greyish: '#a4a4a4',
  tint: '#2b49c3',
}

const tasks = [
  {
    task: 'Morning Walk',
    icon: 'hiking',
    theme: '#008b8b',
    stamp: 'Today . 8pm',
  },
  {
    task: 'Meet with HR',
    icon: 'account-tie',
    theme: '#37003c',
    stamp: 'Today . 10pm',
  },
  {
    task: 'Shopping with family',
    icon: 'cart',
    theme: '#fed132',
    stamp: 'Tommorow . 8pm',
  },
  {
    task: 'Time for Gym',
    icon: 'weight',
    theme: '#008b8b',
    stamp: 'Saturday . 4pm',
  },
  {
    task: 'Morning Walk',
    icon: 'hiking',
    theme: '#37003c',
    stamp: 'Saturday . 8pm',
  },
]

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View style={{
      flexDirection: 'row',
      borderRadius: 20,
      marginHorizontal: 16,
      marginVertical: 4,
      paddingHorizontal: 20,
      paddingVertical: 24,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialCommunityIcons name={icon} size={30} style={{ color: theme, marginRight: 10, }} />
        <View>
          <Text style={{fontSize:16,}}>{task}</Text>
          <Text style={{color: colors.greyish,}}>{stamp}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MaterialCommunityIcons name='pencil' size={30} style={{ color: theme }} />
        <MaterialCommunityIcons name='trash-can' size={30} style={{ color: theme, marginLeft:5,}} />
      </View>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" barStyle='light-content' backgroundColor={colors.themeColor} />
      <View style={styles.containerBottom}>
        <MaterialCommunityIcons name='text' size={30} style={{ color: colors.white }} />
        <View style={{ flexDirection: 'row', }}>
          <MaterialCommunityIcons name='bell-outline' size={30} style={{ color: colors.white }} />
          <AntDesign name='user' size={30} style={{ color: colors.white }} />
        </View>
      </View>
      <View style={{ padding: 16, }}>
        <Text style={{ color: colors.white, fontSize: 30, }}>{"Hello, \nBenjamin"}</Text>
        <View style={{
          paddingHorizontal: 16,
          paddingVertical: 6,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.tint,
          borderRadius: 20,
          marginVertical: 20,
          alignItems: 'center'
        }}>
          <MaterialCommunityIcons name='magnify' color={colors.white} size={30} />
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name='microphone' color={colors.white} size={30} />
            <MaterialCommunityIcons name='tune' color={colors.white} size={30} />
          </View>
        </View>
      </View>

      <View style={{
        padding: 20, flexDirection: 'row',
        backgroundColor: colors.background,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
        <Text style={{ fontSize: 30, }}>Tasks</Text>
        <MaterialCommunityIcons name='plus' color={colors.themeColor} size={40} style={{
          marginHorizontal: 8,
          borderRadius: 20,
        }} />
      </View>

      <ScrollView style={{
        backgroundColor: colors.background,
      }}>
        {tasks.map((item) => <Task 
          task={item.task} 
          icon={item.icon} 
          theme={item.theme} 
          stamp={item.stamp}/>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
  containerBottom: {
    backgroundColor: colors.themeColor,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
