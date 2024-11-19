import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';

const DashboardScreen = ({ navigation }) => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [people, setPeople] = useState('');
  const [room, setRoom] = useState('A101');
  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckAvailability = () => {
    if (!studentId || !name || !people) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }
    if (isNaN(people)) {
      Alert.alert('Validation Error', 'Number of People must be a number.');
      return;
    }
    navigation.navigate('Booking', { studentId, name, people, room });
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.Container2}>
            <Text style={styles.title}>Dashboard</Text>
            <TextInput
                style={styles.input}
                placeholder="Student ID"
                value={studentId}
                onChangeText={setStudentId}
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Number of People"
                value={people}
                onChangeText={setPeople}
                keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.pickerButton}>
                <Text>Select Room: {room}</Text>
            </TouchableOpacity>
            <Modal visible={modalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                <FlatList
                    data={['A101', 'A102', 'A103', 'A104', 'A105']}
                    renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { setRoom(item); setModalVisible(false); }}>
                        <Text style={styles.modalItem}>{item}</Text>
                    </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                />
                </View>
            </Modal>
            <CustomButton title="Check Availability" onPress={handleCheckAvailability} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'   
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  pickerButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    marginBottom: 12,
    borderRadius: 8
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 50,
  },
  modalItem: {
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 1,
    textAlign: 'center',
  },
  Container2: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  }
});

export default DashboardScreen;