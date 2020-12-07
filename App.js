/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class DemoOnLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }

        this.onLayoutChange = this.onLayoutChange.bind(this);
    };

    onLayoutChange(event) {
        const { width, height } = event.nativeEvent.layout;
        this.setState({ width, height });
    }

    render(): React$Node {
        return (
            <View onLayout={this.onLayoutChange}
                  style={styles.container}>
                <Text style={styles.text}>
                    Width: { this.state.width },
                    Height: { this.state.height }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18
    }
})

export default DemoOnLayout;
