import React, {Component} from 'react';
import {StackNavigator} from "react-navigation";
import Main from "./Main";
import ES6Demo from "./app/ES6Demo";

export default class App extends Component<{}> {
    render(){
        return <RootStack/>;
    }
}
const RootStack = StackNavigator({
    Main: {
        screen: Main,
    },
    ES6Demo: {
        screen: ES6Demo,
    },

}, {
    initialRouteName: 'Main',
});