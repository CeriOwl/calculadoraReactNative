import React, { Component } from 'react';
import { Minus, Plus, Linear, Cancel } from 'iconoir-react-native';
import {ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, View, Alert} from "react-native";

export default class FrontPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: "",
      number2: "",
      result: 0
    };
  }
  render() {
    const btnPlus = () => {
      if(inputValidator() != 0){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
            changeResult(xhttp.responseText)
          }
        }
        xhttp.open("GET", "https://udgapplication.000webhostapp.com/tarea.php?num1=" + this.state.number1 + "&num2=" + this.state.number2 + "&op=suma");
        xhttp.send()
      }
    }

    const btnMinus = () => {
      if(inputValidator() != 0){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
            changeResult(xhttp.responseText)
          }
        }
        xhttp.open("GET", "https://udgapplication.000webhostapp.com/tarea.php?num1=" + this.state.number1 + "&num2=" + this.state.number2 + "&op=resta");
        xhttp.send()
      }
    }

    const btnMul = () => {
      if(inputValidator() != 0){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
            changeResult(xhttp.responseText)
          }
        }
        xhttp.open("GET", "https://udgapplication.000webhostapp.com/tarea.php?num1=" + this.state.number1 + "&num2=" + this.state.number2 + "&op=mul");
        xhttp.send()
      }
    }

    const btnDiv = () => {
      if(inputValidator() != 0){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
            changeResult(xhttp.responseText)
          }
        }
        xhttp.open("GET", "https://udgapplication.000webhostapp.com/tarea.php?num1=" + this.state.number1 + "&num2=" + this.state.number2 + "&op=div");
        xhttp.send()
      }
    }


    const inputValidator = () => {
      if(this.state.number1 == "" || this.state.number2 == ""){
        Alert.alert("ERROR", "Valores incorrectos");
        return 0
      }
    }

    const changeResult = (result) => {
      this.setState({result})
    }
    return (
    <SafeAreaView style={styles.globalContainer}>
        <ImageBackground style={styles.imgBackground} imageStyle={{opacity: 0.6}} source={require("./img/pattern-wallpaper.jpg")} resizeMode="cover">
            <View>
              <Text style={styles.title}>Calculadora</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input1} onChangeText={number1 => this.setState({number1})} keyboardType="numeric" placeholder="Introduce el primer numero..."/>
                <TextInput style={styles.input2} onChangeText={number2 => this.setState({number2})} keyboardType="numeric" placeholder="Introduce el segundo numero..."/>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={btnPlus}>
                <View style={styles.button}>
                  <Plus color="steelblue" height={40} width={40}/>
                  <Text>Suma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={btnMinus}>
                <View style={styles.button}>
                  <Minus color="steelblue" height={40} width={40}/>
                  <Text>Resta</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={btnMul}>
                <View style={styles.button}>
                  <Cancel color="steelblue" height={40} width={40}/>
                  <Text>Multiplicación</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={btnDiv}>
                <View style={styles.button}>
                  <Linear color="steelblue" height={40} width={40}/>
                  <Text>División</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Resultado</Text>
              <Text style={styles.result}>{this.state.result}</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
    );
  };
};

const styles = StyleSheet.create({
  globalContainer:{
    flex: 1
  },
  imgBackground: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 55,
    color: "#242424",
    fontWeight: "bold",
    textAlign: "center",
    margin: 20
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 10
  },
  input1: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 350,
    marginBottom: 20,
    paddingLeft: 10,
    borderWidth: 3,
    borderColor: "#242424",
    fontSize: 15
  },
  input2: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 350,
    paddingLeft: 10,
    borderWidth: 3,
    borderColor: "#242424",
    fontSize: 15
  },
  buttonsContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    padding: 10
  },
  button: {
    backgroundColor: "powderblue",
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#242424"
  },
  resultContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20
  },
  resultText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#242424"
  },
  result: {
    fontSize: 80,
    color: "#242424"
  }
})
