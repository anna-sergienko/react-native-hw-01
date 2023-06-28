import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
export default function LoginScreen(){
    return (
<View style={styles.container}>
     <ImageBackground 
     style={styles.image}
     source={require('../../assets/nature-bg.jpg')}
     >
     <View style={styles.formContainer}>
      <View style={styles.titleContainer}>
      <Text style={styles.formTitle}>Увійти</Text>
      </View>

      <View> 
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
      <Text style={styles.buttonTitle}>Увійти</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.8}>
      <Text style={styles.loginCase}>Немає акаунту? Зареєструватися</Text>
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
      height: 489,
      width: "100%",
      marginTop:323,
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
      marginBottom: 33,
      marginTop: 32,
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