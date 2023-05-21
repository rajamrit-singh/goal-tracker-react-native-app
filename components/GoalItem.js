import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
            android_ripple={{ color: '#dddddd' }}
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={(pressData) => {
                if(pressData.pressed) {
                    return styles.pressedItem;
                }
            }}>
            <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>

    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        padding: 5,
    },
    pressedItem: {
        color: '#dddddd' 
    }
});
