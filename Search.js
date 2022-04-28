import { View, Text,FlatList,StyleSheet, TouchableOpacity,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';



const Search = ({navigation}) => {
    const [isLoaded,setIsLoaded]=useState(true)
    const [takeval, settakeval] = useState();
    const [getdata, setdata] = useState();
    let a = takeval
    const go = async () => {
        try {
            const url = `https://api.tvmaze.com/search/shows?q=${a}`;
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            setdata(data)
            setIsLoaded(false)
            if(data == 0)
            {
                alert("Sorry You Have Entered Somthing Wrong. Please Give A Valid Movie Name")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const showdata = (item) => {
        return (

            <TouchableOpacity onPress={() => navigation.navigate("Detail", item.item.show.url)}>
                <View style={sheet1.maincard}>
                    <View style={sheet1.imgcontent}>
                        <Image source={{ uri: item.item.show.image.original }}
                            style={sheet1.imgstyle}
                        />
                    </View>
                    <View style={sheet1.summary}>
                        <Text style={sheet1.info}>{`Name - ${item.item.show.name}   Language -${item.item.show.language}`}</Text>
                        <Text style={sheet1.info}>{`Day - ${item.item.show.schedule.days[0]}  Time - ${item.item.show.schedule.time}`}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={sheet1.main}>
            <View style={sheet1.searchbar}>
                <Searchbar
                    style={sheet1.input}
                    placeholder='Search....'
                    onChangeText={settakeval}
                />
                <TouchableOpacity onPress={go} style={sheet1.btn}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Go</Text>
                </TouchableOpacity>
                {/* <Home /> */}
            </View>

            <View>
                <View style={sheet1.carddata}>
                    <FlatList
                        data={getdata}
                        renderItem={showdata}
                    />
                </View>
            </View>

        </View>
    )
}

const sheet1 = StyleSheet.create({
    searchbar:
    {
        backgroundColor:'black',
        display: 'flex',
        flexDirection: 'row',
        paddingTop:10,
    },
    input:
    {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: '85%',
    },
    btn:
    {
        // borderWidth:2,
        width: '15%',
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    carddata: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
    },
    maincard:
    {
        borderColor: 'silver',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 20,
        width: '100%',
        marginTop:20,
        marginBottom:30,
    },
    imgstyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: 400,
    },
    summary:
    {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'silver',
        justifyContent: 'center',
        alignItems: 'center',

    },
    info:
    {
        fontSize: 12,
        letterSpacing: 1,
        color: 'white',
        textTransform: 'uppercase'
    }

})
export default Search;