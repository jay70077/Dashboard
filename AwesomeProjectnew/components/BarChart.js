/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import PureChart from 'react-native-pure-chart';
const myData = require( '../Utils/data.json');
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    Dimensions,
    FlatList
} from 'react-native';

export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state={
            sampleData:[]
        }
    }


    render(){
        myData.data.map((data)=>{
            var obj ={};
            console.log(data.ff_count);
            {
                obj.seriesName ='series1';
                obj.color ='#297AB1';
                obj.data=[{x:'ff_count',y:data.ff_count}];
                this.state.sampleData.push(obj);
            }

        });
        return (
            <View style={styles.mainView}>
                <PureChart
                 defaultColumnWidth={Dimensions.get('window').width}
                 data={this.state.sampleData}
                 type='bar'
                 height={400}
                 color={'#00bfff'}
                />
            </View>
        );

    }

};


const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        paddingTop:10,
        paddingRight:15,
    },
    chart: {
        height: 500,
        width:400,
        marginTop: 50,
        paddingTop: 50
    },
});
