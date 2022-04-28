import { useEffect, useState } from "react";
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";



const Home = ({ navigation }) => {
    const [getdata, setdata] = useState();

    const hompage = async () => {
        try {
            const url = `https://api.tvmaze.com/search/shows?q=all`;
            const respose = await fetch(url)
            const data = await respose.json()
            setdata(data)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => hompage(), [])

  
    const showdata = (item) => {
        // console.log(item.item.show.image.medium)
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
            <View style={sheet1.carddata}>
                <FlatList
                    keyExtractor={(item)=>item.score}
                    data={getdata}
                    renderItem={showdata}
                />
        </View >
    )
}



const sheet1 = StyleSheet.create({
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
        // height: 500,
        marginBottom: 30,
        marginTop:10,
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
export default Home;