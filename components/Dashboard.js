/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// eslint-disable-next-line no-unused-vars
import React,{Component } from 'react';
import {
    // eslint-disable-next-line no-unused-vars
    SafeAreaView,
    StyleSheet,
    // eslint-disable-next-line no-unused-vars
    ScrollView,
    // eslint-disable-next-line no-unused-vars
    View,
    // eslint-disable-next-line no-unused-vars
    Text,
    // eslint-disable-next-line no-unused-vars
    Button,
    // eslint-disable-next-line no-unused-vars
    FlatList
} from 'react-native';

import {
    // eslint-disable-next-line no-unused-vars
    Header,
    // eslint-disable-next-line no-unused-vars
    LearnMoreLinks,
    Colors,
    // eslint-disable-next-line no-unused-vars
    DebugInstructions,
    // eslint-disable-next-line no-unused-vars
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ApiIntegration from '../Utils/ApiIntegration'
// eslint-disable-next-line no-unused-vars
import Myheader from './Header'
import _extends from "@babel/runtime/helpers/esm/extends";
import { Icon, Picker, Form } from "native-base";
import TableData from "./tableData";


export default class Dashboard extends Component {
   constructor(props) {
       super(props);
       this.state = {
           mydata: [],
           selected: "",
           selected1: "",
           selected2: ""
       }


   }
    // eslint-disable-next-line no-unused-vars,no-undef
    //const [navdata, setnavData]=useState(props.navigation);

    onValueChange=(value)=> {
        ApiIntegration.filterUser(value)
            .then((data)=>{
                console.log('response',data);
                this.setState({
                    selected: value,
                    mydata:data.data
                });
            }).catch((error)=>{
            console.log('error',error);
        });
    };

    onValueChange1=(value)=> {
        ApiIntegration.filterData(value)
            .then((data)=>{
                console.log('response',data);
                this.setState({
                    selected1: value,
                    mydata:data.data
                });
            }).catch((error)=>{
            console.log('error',error);
        });
    };
    onValueChange2=(value)=> {
        ApiIntegration.filterTarget(value)
            .then((data)=>{
                console.log('response',data);
                this.setState({
                    selected2: value,
                    mydata:data.data
                });
            }).catch((error)=>{
            console.log('error',error);
        });
    };

    componentDidMount(){
        ApiIntegration.dashboardApi()
            .then((response)=>{
                console.log('response',response);
                this.setState({
                    mydata:response.data
                }, () => {
                    console.log(this.state.mydata, 'mydata');
                });
            }).catch((err)=>{
            console.log('error',err);
        });

    }

render() {
    var dataRows = this.state.mydata;
    return (
        <ScrollView>
            <Myheader passNavData={this.props.navigation}/>
            <View style={{flex:1,marginLeft: 20,borderBottomColor:'gray',borderBottomWidth:0.6,marginBottom:20,marginRight: 20}}>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                    style={{ width: undefined }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange}
                >
                    <Picker.Item label="All RDMSs" value="1" />
                    <Picker.Item label="Varun Ramesh" value="2" />
                </Picker>
            </View>
            <View style={{flex:1,marginLeft: 20,borderBottomColor:'gray',borderBottomWidth:0.6,marginBottom:20,marginRight: 20}}>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                    style={{ width: undefined }}
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange1}
                >

                    <Picker.Item label="All Business Units" value="1" />
                    <Picker.Item label="EP" value="2" />
                    <Picker.Item label="CHC" value="4" />
                    <Picker.Item label="Pasteur/Super specialty" value="3" />
                </Picker>
            </View>
            <View style={{flex:1,marginLeft: 20,borderBottomColor:'gray',borderBottomWidth:0.6,marginBottom:20,marginRight: 20}}>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                    style={{ width: undefined }}
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2}
                >
                    <Picker.Item label="FM" value="1" />
                    <Picker.Item label="AM" value="2" />
                    <Picker.Item label="All Target audiences" value="3" />
                    <Picker.Item label="RBM" value="4" />
                </Picker>
            </View>
            <View style={styles.mainView}>
                <View style={styles.buttons}>
                    <View style={{width: 100}}>
                        <Button
                            title="Monthly"
                            color="blue"
                            accessibilityLabel="Monthly"
                        />
                    </View>
                    <View style={{width: 100}}>
                        <Button
                            title="Quaterly"
                            color="gray"
                            accessibilityLabel="Quaterly"
                        />
                    </View>
                    <View style={{width: 100}}>
                        <Button
                            title="Yearly"
                            color="green"
                            accessibilityLabel="Yearly"
                        />
                    </View>

                </View>
                <View style={{flex:1,flexDirection: 'row'}}>
                <View style={styles.mainBox}>
                    <Text style={styles.myText}> Total Numner of People Impact</Text>
                    <Text style={styles.myValue}> 200</Text>
                </View>

                <View style={styles.mainBox}>
                    <Text style={styles.myText}> Digital Count</Text>
                    <Text style={styles.myValue}> { dataRows.length ==0  ? '' : dataRows.digital_count}</Text>
                </View>
                </View >
                <View style={{flex:1,flexDirection: 'row'}}>
                <View style={styles.mainBox}>
                    <Text style={styles.myText}> FF Count</Text>
                    <Text style={styles.myValue}>{dataRows.length ==0  ? '' :  dataRows.ff_count}</Text>
                </View>
                <View style={styles.mainBox}>
                    <Text style={styles.myText}> F2F Count</Text>
                    <Text style={styles.myValue}>{ dataRows.length ==0  ? '' : dataRows.f2f_count}</Text>
                </View>
                </View>
                <View style={styles.mainView}>
                    <View style={styles.first}>
                        <Text style={styles.tableheader}>
                            EVENT NAME
                        </Text>
                        <Text style={styles.tableData}>
                            PFIT/EXPOSE
                        </Text>

                    </View>
                    <View style={styles.first}>
                        <Text style={styles.tableheader}>
                            F2F/DIGITAL
                        </Text>
                        <Text style={styles.tableData}>
                            { dataRows.length ===0  ? '' : dataRows.f2f_count}
                        </Text>

                    </View>
                    <View style={styles.first}>
                        <Text style={styles.tableheader}>
                            FF COUNT
                        </Text>
                        <Text style={styles.tableData}>
                            { dataRows.length ===0  ? '' : dataRows.ff_count}
                        </Text>

                    </View>


                </View>
            </View>
        </ScrollView>
    );


}
};

const styles = StyleSheet.create({

    mainView:{
        flex:1,
        justifyContent:'center'
    },
    mainBox:{
        flex:0.5,
        paddingTop:30,
        paddingBottom:30,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderRadius:4,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        marginBottom:15,
    },
    tables:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        borderWidth: 0.5,
        borderColor: 'gray',
        marginLeft:10,
        marginRight:10,
        paddingBottom: 50,
        marginBottom:50
    },
    myText:{
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    myValue:{
        fontSize: 25,
        fontWeight: '800',
        color: Colors.dark,
    },
    buttons:{
        flex:1,
        flexDirection:'row-reverse',
        marginBottom: 20,
       position:'relative',
        right:10,

    },
    first:{
        flex:0.33,
        marginEnd:1,
    },
    tableheader:{
        fontSize:14,
        fontWeight: '600',
        borderBottomWidth:0.6,
        backgroundColor:'gray',
        paddingBottom:10,
        paddingTop:10,
        paddingLeft:10

    },
    tableData:{
        padding:10,
        marginBottom:1,
        backgroundColor: 'lightgray'
    },

});
