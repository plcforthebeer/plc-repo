import * as React from "react";
import {
  Text,
  View,
  TextInput
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "../styles.style.js";


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    const temp = 0; 
    const pu = 0;
    this.state = {
      isLoading: true,
      selected: "Time + Temp = PU" || temp + pu,
      result: "",
    };

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleReset(event) {
    // need to do this.
  }

  calculateValue() {
      var selected = this.state.selected
      var time = Number(this.state.time);
      var z = Number(this.state.z);
      var temp = Number(this.state.temp);
      var pu = Number(this.state.pu);
      switch(selected) {
        case "Time + Temp = PU":
            var first = time * Math.pow(10, ((temp - 60) / z));
            this.setState({ result: first });
        break;
        case "Temp + PU = Time":
            var first = pu / Math.pow(10, ((temp - 60) / z));
            this.setState({ result: first });
        break;
        case "PU + Time = Temp":
            var first = (Math.log((pu / time)) / z) + 60;
            this.setState({ result: first });
        break;
      }
  }


  render() {
    return (
      <Formik 
        initialValues={{
          tref: 0,
          z: 0,
          dref: 0,
          pureq: 0,
          time: 0,
          temp: 0,
          pu: 0,
          putot: 0,
          ltproc: 0,
          temp: "",
          time: "",
        }}
        validate={(values) => {
          if (values.dref) {
            values.pu = values.dref * 6;
            values.pu = values.pu.toFixed(1);
          }
          if (values.dref == "") values.pureq = "";

          if (values.temp && values.time) {
            var takeawayOne = values.time - 1;
            var test =
              (values.time - takeawayOne) *
                Math.pow(10, (values.temp - 60) / values.z) +
              23.6;

            values.putot = test;
            values.putot = values.putot.toFixed(2);
          }

          if (values.putot) {
            values.ltproc = values.putot / values.dref;
            values.ltproc = values.ltproc.toFixed(1);
          }

          this.setState({
            pureq: values.pureq,
            pu: values.pu,
            putot: values.putot,
            ltproc: values.ltproc,
            dref: values.dref,
            tref: values.tref,
            z: values.z,
            temp: values.temp,
            time: values.time,
          });
        }}
        validationSchema={Yup.object({
          tref: Yup.string().required("Required"),
          z: Yup.string().required("Required"),
          dref: Yup.string().required("Required"),
          pureq: Yup.string().required("Required"),
          putot: Yup.string().required("Required"),
          ltproc: Yup.string().required("Required"),
          temp: Yup.string().required("Required"),
          time: Yup.string().required("Required"),
        })}
        onSubmit={({ resetForm }) => {
          resetForm();
        }}
      >
        {(props) => (
          <View styles={styles.innerPara}>
            <TextInput
              onChangeText={props.handleChange("tref")}
              onBlur={props.handleBlur("tref")}
              value={this.state.tref}
              placeholder="TREF"
              style={styles.input}
            />
            <TextInput
              onChangeText={props.handleChange("z")}
              onBlur={props.handleBlur("z")}
              placeholder="Z-VALUE"
              value={this.state.z}
              style={styles.input}
            />
            <Text style={styles.padding}></Text>
            <TextInput
              onChangeText={props.handleChange("dref")}
              onBlur={props.handleBlur("dref")}
              value={this.state.dref}
              placeholder="DREF"
              style={styles.input}
            />
            <Text style={styles.para2}>Total amount of PU wanted:</Text>
            <TextInput
              onBlur={props.handleBlur("pu")}
              value={this.state.pu}
              placeholder="PU"
              style={styles.input}
              keyboardType="numeric"
            />
            <Text style={styles.para3}></Text>
            <Text style={styles.para2}>
              Calculate Pasturisation units of the process
            </Text>
            <View>
              <Picker
                selectedValue={this.state.selected}
                style={styles.dropDown}
                mode="dropdown"
                onValueChange={(itemValue) =>
                  this.setState({
                    selected: itemValue,
                  })
                }
              >
                <Picker.Item
                  label="Time + Temp = PU"
                  value="Time + Temp = PU"
                />
                <Picker.Item
                  label="Temp + PU = Time"
                  value="Temp + PU = Time"
                />
                <Picker.Item
                  label="PU + Time = Temp"
                  value="PU + Time = Temp"
                />
              </Picker>
            </View>
            <View>
              <Text style={styles.para3}>Your selected test:</Text>
              <Text style={styles.para5}>
                  {this.state.selected}
                    {'\n'}
                  {this.state.temp} + {this.state.time} = {this.state.result}
              </Text>
              <Text style={styles.para2}>Please enter inputs below:</Text>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange("temp")}
                value={this.state.temp}
                placeholder="TEMP"
                keyboardType="numeric"
              />
              <Text style={styles.padding}></Text>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange("time")}
                value={this.state.time}
                placeholder="TIME"
                keyboardType="numeric"
              />
              <Button
                onPress={() => this.calculateValue()}
                color="white"
                mode="outlined"
                disabled={props.isSubmitting}
                style={styles.buttonStyle}
              >
                Calculate
              </Button>
            </View>
            <Text style={styles.para3}></Text>
            <Text style={styles.para2}>Log reduction of the process:</Text>
            <TextInput
              onChangeText={props.handleChange("ltproc")}
              onBlur={props.handleBlur("ltproc")}
              value={this.state.ltproc}
              placeholder="LTProc"
              style={styles.input}
              keyboardType="numeric"
            />
            <Button
              onPress={() => this.handleReset()}
              color="white"
              mode="outlined"
              disabled={props.isSubmitting}
              style={styles.buttonStyle}
            >
              Reset
            </Button>
          </View>
        )}
      </Formik>
    );
  }
}