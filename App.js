import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking } from 'react-native';

const App = () => {
  const [sharedContent, setSharedContent] = useState(null);

  useEffect(() => {
    // Function to handle deep linking
    const handleDeepLink = (event) => {
      const url = event.url;
      console.log("Received deep link:", url);
      setSharedContent(url);  // Save the shared content (link or image URI)
    };

    // Listen for deep link events
    Linking.addEventListener('url', handleDeepLink);

    // Check if the app was opened from a deep link on launch
    const initialUrl = Linking.getInitialURL();
    if (initialUrl) {
      setSharedContent(initialUrl);
    }

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shared Content:</Text>
      {sharedContent ? (
        sharedContent.includes("http") ? (
          <Text>{sharedContent}</Text>  // If it's a link, display it as text
        ) : (
          <Image source={{ uri: sharedContent }} style={{ width: 200, height: 200 }} />
        )
      ) : (
        <Text>No content shared</Text>
      )}
    </View>
  );
};

export default App;
