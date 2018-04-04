import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class ES6Demo extends Component {

    static navigationOptions = {
        title: 'ES6 Guide',
    };

    f() {
        let [bar, foo] = [1];
        alert(bar);
    }

    f1() {
        let {foo: baz} = {foo: 'aaa', bar: 'bbb'};
        alert(baz);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                                  onPress={this.f.bind(this)}
                >
                    <Text style={{color:'white'}}>f</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={this.f1.bind(this)}
                >
                    <Text style={{color:'white'}}>f1</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    button: {
        marginTop: 10,
        width: 100,
        height: 40,
        backgroundColor:'#841584',
        justifyContent:'center',
        alignItems:'center'
    }
});