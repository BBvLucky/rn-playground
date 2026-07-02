import { useEffect, useState, type JSX } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import NativeStorageTest from '../../specs/NativeStorageTest';



function App(): JSX.Element {
  const [value, setValue] = useState<string | null>(null);

  const [editingValue, setEditingValue] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const storedValue = NativeStorageTest?.get('itemKey');
    setValue(storedValue ?? '');
  }, []);

  function saveValue() {
    if (editingValue) {
      NativeStorageTest?.set(editingValue, 'itemKey');
      setValue(editingValue);
    }
  }

  function clearAll() {
    NativeStorageTest?.clear();
    setValue('');
  }

  function deleteValue() {
    NativeStorageTest?.remove('itemKey');
    setValue('');
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.text}>
        Current stored value is: {value ?? 'No Value'}
      </Text>
      <TextInput
        placeholder="Enter the text you want to store"
        style={styles.textInput}
        onChangeText={setEditingValue}
      />
      <Button title="Save" onPress={saveValue} />
      <Button title="Delete" onPress={deleteValue} />
      <Button title="Clear" onPress={clearAll} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});

export default App;