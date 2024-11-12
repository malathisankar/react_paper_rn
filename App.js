import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Card, Text, Appbar } from 'react-native-paper';

const App = () => {
  const [text, setText] = React.useState('');

  return (
 
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Appbar.Header>
          <Appbar.Content title="React Native Paper Demo" />
        </Appbar.Header>

        <Card style={{ marginBottom: 20 }}>
          <Card.Title title="Welcome!" subtitle="React Native Paper Example" />
          <Card.Content>
            <Text variant="bodyMedium">
              This is a simple example using React Native Paper.
            </Text>
          </Card.Content>
        </Card>

        <TextInput
          label="Type something"
          value={text}
          onChangeText={text => setText(text)}
          style={{ marginBottom: 20 }}
        />

        <Button mode="contained" onPress={() => console.log("Button pressed!")}>
          Press Me
        </Button>

      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
