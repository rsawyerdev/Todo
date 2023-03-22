import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TaskProps = {
    text: string
}
function Task({text}: TaskProps): JSX.Element {

    return (
        <View style={styles.container}>
            <Text style={styles.taskText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5
    },
    taskText: {
        fontSize: 22
    }

});

export default Task;