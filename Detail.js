
import WebView from "react-native-webview";

const Detail =(route)=>
{
    // console.log(route.route.params)
    return (
        
        <WebView source={{uri:route.route.params}}/>
    )
}
export default Detail;
