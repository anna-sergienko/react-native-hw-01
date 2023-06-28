import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function RegistrationScreen (){

    return (
<View style={styles.container}>
     <ImageBackground 
     style={styles.image}
     source={require('../../assets/nature-bg.jpg')}
     >
      
     <View style={styles.formContainer}>
     <View style={styles.profPicContainer}></View>
     <Image source={require("../../assets/add.png")} style={styles.addIcon}/>
      <View style={styles.titleContainer}>
      <Text style={styles.formTitle}>Реєстрація</Text>
      </View>

      <View> 
       <TextInput
    placeholder="Логін"
    placeholderTextColor="#BDBDBD"
    style={styles.input}
    />
        <TextInput
        style={styles.input}
    placeholder="Адреса електронної пошти"
    placeholderTextColor="#BDBDBD"
    />
        <TextInput
        style={styles.input}
    placeholder="Пароль"
    placeholderTextColor="#BDBDBD"
    secureTextEntry={true}
    />
   <TouchableOpacity activeOpacity={0.8} >
      <Text style={styles.showPswrdBtn}>Показати</Text>
  </TouchableOpacity>
    </View>

    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <Text style={styles.buttonTitle}>Зареєстуватися</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.8}>
      <Text style={styles.loginCase}>Вже є акаунт? Увійти</Text>
    </TouchableOpacity>
      </View>
     </ImageBackground>
    </View>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      resizeMode: 'cover',
      alignItems: 'center',
  
    },
    formContainer: {
      flex: 1,
      backgroundColor:"#FFFFFF",
      height:549,
      width: "100%",
      marginTop:263,
      justifyContent:"center",
      alignItems: 'center',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingLeft: 16,
      paddingRight: 16,
    }, 
    formTitle:{
   color: "#212121",
   textAlign: "center",
  fontSize: 30,
  fontWeight: 500,
  letterSpacing: 0.3,
    },
    titleContainer: {
      display: "block",
      width: 343,
      height: 36,
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 92,
      paddingRight: 92,
      marginBottom: 33,
    },
    input:{
      height: 50,
      width: 343,
      margin: 0,
      marginBottom: 16,
      borderWidth: 1,
      paddingLeft: 16,
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: "#F6F6F6",
      borderColor: "#E8E8E8",
      borderRadius: 10,
    },
    button :{
  display: "flex",
  width: 343,
  height: 50,
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 32,
  paddingRight: 32,
  flexDirection: "column",
  alignItems: "center",
  marginTop: 27,
  marginBottom: 16,
  borderRadius: 100,
  backgroundColor: "#FF6C00",
    },
    buttonTitle:{
  textAlign: "center",
  fontSize: 16,
  color: "#fff"
    },
    profPicContainer:{
  position: "absolute",
  width: 120,
  height: 120,
  borderRadius: 16,
  backgroundColor: "#F6F6F6",
  top: -55,
  left: 130,
    },
    addIcon:{
      width: 25,
  height: 25,
  position: "absolute",
  top: 20,
  left: 235,
    },
    loginCase: {
      color: "#1B4371",
  textAlign: "center",
  fontSize: 16,
    },
    loginCaseContainer:{
  display: "block",
    },
    showPswrdBtn:{
  color: "#1B4371",
  textAlign: "right",
  fontSize: 16,
  position: "absolute",
  top: -50,
  left: 255,
    }
  });
  