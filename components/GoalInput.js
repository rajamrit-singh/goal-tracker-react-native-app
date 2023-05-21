import { StyleSheet, TextInput, View, Button } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };
    
    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoalText)
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Your Course goal!"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler}  />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
});
