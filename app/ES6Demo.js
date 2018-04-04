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

    f2(){
        const node = {
            loc: {
                start: {
                    line: 1,
                    column: 5
                }
            }
        };

        let { loc, loc: { start }, loc: { start: { line }} } = node;
        // line // 1
        // loc  // Object {start: Object}
        // start // Object {line: 1, column: 5}
    }

    f3(){
        var {x = 3} = {};
        //x // 3

        var {x, y = 5} = {x: 1};
        x // 1
       // y // 5

        var {x: y = 3} = {};
        //y // 3

        var {x: y = 3} = {x: 5};
       // y // 5

        var { message: msg = 'Something went wrong' } = {};
       // msg // "Something went wrong"

        var {x = 3} = {x: undefined};
        //x // 3

        var {x = 3} = {x: null};
        //x // null
    }

    f4(){
        let { log, sin, cos } = Math;
        let arr = [1, 2, 3];
        let {0 : first, [arr.length - 1] : last} = arr;
        //first // 1
        //last // 3

        let [foo, [[bar], baz]] = [1, [[2], 3]];
        // foo // 1
        // bar // 2
        // baz // 3
    }

    f5(){
        function move({x = 0, y = 0} = {}) {
            return [x, y];
        }

       // move({x: 3, y: 8}); // [3, 8]
        //move({x: 3}); // [3, 0]
        //move({}); // [0, 0]
       // move(); // [0, 0]

        function move({x, y} = { x: 0, y: 0 }) {
            return [x, y];
        }

        //move({x: 3, y: 8}); // [3, 8]
        //move({x: 3}); // [3, undefined]
        //move({}); // [undefined, undefined]
        //move(); // [0, 0]
    }

    example() {
        return [1, 2, 3];
        // return {
        //     foo: 1,
        //     bar: 2
        // };
    }

    f6(){
        let [a, b, c] = this.example();
        // let { foo, bar } = this.example();
    }

    // 参数是一组无次序的值
    f7({x, y, z}) { }

    f8(){
        this.f7({z: 3, y: 2, x: 1});
    }

    f9(){
        const map = new Map();
        map.set('first', 'hello');
        map.set('second', 'world');

        for (let [key, value] of map) {
            console.log(key + " is " + value);
        }
        // first is hello
        // second is world
    }
    f10(){
        const arr = [{name:'a', age:11},{name:'b', age:12},{name:'c', age:13}];
        for (let {age} of arr) {
            console.log(age);
        }
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

                <TouchableOpacity style={styles.button}
                                  onPress={this.f2.bind(this)}
                >
                    <Text style={{color:'white'}}>f2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={this.f9.bind(this)}
                >
                    <Text style={{color:'white'}}>f9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={this.f10.bind(this)}
                >
                    <Text style={{color:'white'}}>f10</Text>
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