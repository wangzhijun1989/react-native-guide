import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default class Main extends Component<{}> {

    static navigationOptions = {
        title: 'GUIDE',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.button}
                        onPress={() => this.props.navigation.navigate('ES6Demo')}
                        accessibilityLabel="See an informative alert"
                        title="ES6"
                />
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        marginTop: 10,
        width: 100
    }
});
