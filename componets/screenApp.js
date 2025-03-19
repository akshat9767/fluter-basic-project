import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ScreenApp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://example.com/profile-picture.jpg' }} // Replace with your image URL or local asset
        style={styles.profilePicture}
      />

      {/* Name */}
      <Text style={styles.name}>John Doe</Text>

      {/* Phenomenon */}
      <Text style={styles.phenomenon}>Technology Enthusiast</Text>

      {/* Friendliness */}
      <Text style={styles.friendliness}>Friendly and Approachable</Text>

      {/* Additional Info Section */}
      <View style={styles.additionalInfo}>
        <Text style={styles.infoText}>Joined: January 2024</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Changed to 'flex-start' to allow content to stay at the top
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  phenomenon: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  friendliness: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  additionalInfo: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default ScreenApp;
