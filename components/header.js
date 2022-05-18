import { View, Text, StyleSheet, Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.picture}></Text>
        <View style={styles.greets}>
          <Text style={{fontSize: 12}}>Hello,</Text>
          <Text style={styles.username}>John Doe</Text>
        </View>
      </View>
      <View style={styles.notify}>
        <Image style={styles.notifyIcon} source={require('../assets/notification.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      picture: {
        backgroundColor: '#aaa',
        color: '#fff',
        width: 60,
        height: 60,
        borderRadius: 30
      },
      greets: {
        marginLeft: 15
      },
      username: {
        fontWeight: 'bold',
        fontSize: 15
      },
      notifyIcon: {
        height: 25,
        width: 25
      }
})

export default Header