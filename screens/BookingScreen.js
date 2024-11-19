import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';

const BookingScreen = ({ route }) => {
  const { studentId, name, people, room } = route.params;
  const roomData = [
    { roomNumber: 'A101', capacity: 5, available: true },
    { roomNumber: 'A102', capacity: 10, available: false },
    { roomNumber: 'A103', capacity: 8, available: false },
    { roomNumber: 'A104', capacity: 10, available: true },
    { roomNumber: 'A105', capacity: 7, available: true },
  ];

  const selectedRoom = roomData.find((r) => r.roomNumber === room);

  const checkAvailability = () => {
    if (selectedRoom.available && selectedRoom.capacity >= people) {
      Alert.alert('Room Available', `Room ${room} is available for booking.`);
    } else {
      Alert.alert('Room Not Available', `Room ${room} is not available.`);
    }
  };

  React.useEffect(() => {
    checkAvailability();
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Booking Details</Text>
        <Text>Student ID: {studentId}</Text>
        <Text>Name: {name}</Text>
        <Text>Number of People: {people}</Text>
        <Text>Room: {room}</Text>
        <Text>
            {selectedRoom.available && selectedRoom.capacity >= people
            ? 'Booking Available'
            : 'Booking Not Available'}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default BookingScreen;