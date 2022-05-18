import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'

const listTab = [
    {
        status: 'Watchlist'
    },
    {
        status: 'View All'
    },
    {
        status: 'Gainers'
    },
    {
        status: 'Losers'
    }
]

const data = [
  {
    name: 'Bond A',
    symbol: 'BT1',
    favourite: true,
    percent: 10.65,
    price: 37.7
  },
  {
    name: 'Bond C',
    symbol: 'BT2',
    favourite: false,
    percent: 12.4,
    price: 1243.7
  },
  {
    name: 'Bond Finance',
    symbol: 'BT3',
    favourite: false,
    percent: -5.7,
    price: 427.6
  },
  {
    name: 'Bond Regalia',
    symbol: 'BT4',
    favourite: true,
    percent: 18.4,
    price: 12.87
  },
  {
    name: 'Bond Asia Pacific',
    symbol: 'BT5',
    favourite: true,
    percent: -13.21,
    price: 0.83
  },
]

const BondTab = () => {
    const [status, setStatus] = useState('Watchlist')
    const [desc, setDesc] = useState(false)
    const [datalist, setDatalist] = useState(data)

    const setStatusFilter = status => {
      if (status === 'Watchlist') {
        setDatalist([...data.filter(e => e.favourite === true)])
      } else if (status === 'Gainers') {
        setDatalist([...data.filter(e => e.percent > 0)])
      } else if (status === 'Losers') {
        setDatalist([...data.filter(e => e.percent < 0)])
      }
      else {
        setDatalist(data)
      }
      setStatus(status)
    }

    useEffect(() => {
      setDatalist([...data.filter(e => e.favourite === true)])
    }, [])
    
    const renderItem = ({item, index}) => {
      return (
        <View key={index} style={styles.itemContainer}>
          <View style={styles.itemBody}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.symbol}</Text>
          </View>

          <View style={styles.itemPrice}>
            <Text>{'$ ' + item.price.toFixed(2).toString()}</Text>
          </View>
  
          <View style={[styles.itemStatus, {backgroundColor: item.percent < 0 ? '#e5848e' :"#69c080"}]}>
            <Text style={styles.textStatus}>{(item.percent).toFixed(2).toString() + " %"}</Text>
          </View>
        </View>
      )
    }

    // Sort by Name
    const sort_name_btn = () => {
      let array = sort_by_name(datalist, 'name', desc)
      // console.log(array)
      setDesc(!desc)
    }

    const sort_by_name = (array, sort, desc) => {
      array.sort(function (a, b) {
        if (a [sort] < b [sort]) return -1
        if (b [sort] < a [sort]) return 1
        return 0
      })
      if (desc) array.reverse()
      return array
    }

    // Sort by Price
    const sort_price_btn = () => {
      let array = sort_by_price(datalist, 'price', desc)
      // console.log(array)
      setDesc(!desc)
    }

    const sort_by_price = (array, sort, desc) => {
      array.sort(function (a, b) {
        if (a [sort] < b [sort]) return -1
        if (b [sort] < a [sort]) return 1
        return 0
      })
      if (desc) array.reverse()
      return array
    }

    // Sort by Change
    const sort_change_btn = () => {
      let array = sort_by_change(datalist, 'percent', desc)
      // console.log(array)
      setDesc(!desc)
    }

    const sort_by_change = (array, sort, desc) => {
      array.sort(function (a, b) {
        if (a [sort] < b [sort]) return -1
        if (b [sort] < a [sort]) return 1
        return 0
      })
      if (desc) array.reverse()
      return array
    }

    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.listTab}>
          {
              listTab.map(e => (
              <TouchableOpacity key={e.status}
                  onPress={() => setStatusFilter(e.status)}
                  style={[styles.btnTab, status===e.status && styles.btnTabActive]}
              >
                  <Text style={[styles.textTab, status===e.status && styles.textTabActive]}>{e.status}</Text>
              </TouchableOpacity>
              ))
          }
          </View>

          <View style={styles.itemTitle}>
            <View style={styles.tokenName}>
              <TouchableOpacity onPress={sort_name_btn}>
                <Text style={styles.columnTitle}>Code Name</Text>
                <Image style={styles.dropdownIcon} source={require('../assets/dropdown.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.tokenPrice}>
              <TouchableOpacity onPress={sort_price_btn}>
                <Text style={styles.columnTitle}>Last Price</Text>
                <Image style={styles.dropdownIcon} source={require('../assets/dropdown.png')} />
              </TouchableOpacity>
            </View>
    
            <View style={styles.tokenChange}>
              <TouchableOpacity onPress={sort_change_btn}>
                <Text style={styles.columnTitle}>Change</Text>
                <Image style={styles.dropdownIcon} source={require('../assets/dropdown.png')} />
              </TouchableOpacity>
            </View>
          </View>
          
          <FlatList 
            data={datalist}
            keyExtractor={(e, i) => i.toString()}
            renderItem={renderItem}
          />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
    },
    listTab: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 20
    },
    btnTab: {
      width: Dimensions.get('window').width / 4.5,
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'center'
    },
    textTab: {
      fontSize: 15
    },
    btnTabActive: {
      borderBottomColor: '#333',
      borderBottomWidth: 3
    },
    textTabActive: {
      fontWeight: 'bold'
    },
    itemContainer: {
      flexDirection: 'row',
      marginVertical: 10
    },  
    itemTitle: {
      flexDirection: 'row',
      marginVertical: 10
    },
    tokenName: {
      flex: 2,
      alignItems: 'center',
      flexDirection: 'row',
    },
    tokenPrice: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row'
    },
    tokenChange: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      width: 80,
      marginHorizontal: 10,
    },
    itemBody: {
      flex: 2,
      justifyContent: 'center',
    },
    itemName: {
      fontSize: 16
    },
    itemPrice: {
      flex: 1,
      justifyContent: 'center'
    },
    itemStatus: {
      flex: 1,
      backgroundColor: 'green',
      marginVertical: 6,
      marginHorizontal: 10,
      justifyContent: 'center',
      width: 80,
      height: 30,
      borderRadius: 5
    },
    textStatus: {
      textAlign: 'center',
      color: '#fff',
    },
    dropdownIcon: {
      width: 10,
      height: 10,
      marginTop: 2,
      marginLeft: 6
    },
    columnTitle: {
      fontSize: 13
    }
  });

export default BondTab