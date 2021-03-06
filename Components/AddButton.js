import * as React from 'react';
import { Text, View, StyleSheet,Pressable,Alert } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchVendorList,addToCart } from "../redux/ActionCreators";
import { connect } from "react-redux";


const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
  registerUser:(userToken) => dispatch(registerUser(userToken)),
  fetchVendorList:() => dispatch(fetchVendorList()),
  addToCart:(product)=>dispatch(addToCart(product))
})

const mapStateToProps = state => {
  return {
    vendorlist: state.vendorlist,
    cartlist:state.cartlist
  }
}

 function AddButton(props) {
  var [state,setState] = React.useState(0);

function handlePress(item){
setState(state + 1);

}

function add(item){
 
  setState(state + 1);
  
}

function minus(){
  setState(state - 1);
}
  if(state==0)
  {
    return(
      <View >
        <Pressable style={{padding:10,backgroundColor:'pink',borderRadius:10,width:110,justifyContent:'center',alignItems:'center'}} >
      <Text onPress={()=>handlePress()}>Add</Text>
     </Pressable>
      </View>
    )
  }

  else{
      return (
        <View>
        <Pressable style={{padding:10,backgroundColor:'pink',borderRadius:10,width:110,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Icon
            onPress={()=>add()}
            name="plus"
            color="white"
            style={{marginRight:4}}
          />
          <Text>{state}</Text>
          <Icon
            onPress={()=>minus()}
            name="minus"
            color="white"
            style={{marginLeft:4}} 
          />
        </Pressable>
        </View>
      );
  }


}


export default connect(mapStateToProps,mapDispatchToProps)(AddButton)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
