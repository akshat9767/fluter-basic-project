import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  // Sample data for profile
  const profile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phenomenon: 'Enthusiastic Developer and Open Source Contributor',
    photo: 'https://via.placeholder.com/150', // Placeholder image URL
  };

  // Sample list of friends
  const friends = ['Alice', 'Bob', 'Charlie', 'Diana'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image source={{ uri: profile.photo }} style={styles.profilePic} />
      </View>

      {/* Name */}
      <Text style={styles.name}>{profile.name}</Text>

      {/* Email */}
      <Text style={styles.email}>{profile.email}</Text>

      {/* Phenomenon/Status */}
      <Text style={styles.phenomenon}>{profile.phenomenon}</Text>

      {/* Friends List */}
      <Text style={styles.friendsTitle}>Friends:</Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendName}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profilePicContainer: {
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  phenomenon: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  friendsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  friendName: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default ProfileScreen;
