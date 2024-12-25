// Import library React Native
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const FutsalScoreApp = () => {
  // State untuk skor tim A dan tim B
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  // Fungsi untuk menambah skor
  const increaseScore = (team) => {
    if (team === 'A') {
      if (scoreTeamA + 1 === 10) {
        Alert.alert('Hasil Pertandingan', 'Tim A Menang!');
      }
      setScoreTeamA(scoreTeamA + 1);
    } else {
      if (scoreTeamB + 1 === 10) {
        Alert.alert('Hasil Pertandingan', 'Tim B Menang!');
      }
      setScoreTeamB(scoreTeamB + 1);
    }
  };

  // Fungsi untuk mengurangi skor
  const decreaseScore = (team) => {
    if (team === 'A') {
      setScoreTeamA(scoreTeamA > 0 ? scoreTeamA - 1 : 0);
    } else {
      setScoreTeamB(scoreTeamB > 0 ? scoreTeamB - 1 : 0);
    }
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pertandingan Futsal</Text>

      {/* Informasi Tim A */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Tim A</Text>
        <Text style={styles.score}>{scoreTeamA}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => increaseScore('A')} />
          <Button title="-" onPress={() => decreaseScore('A')} />
        </View>
      </View>

      {/* Informasi Tim B */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Tim B</Text>
        <Text style={styles.score}>{scoreTeamB}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => increaseScore('B')} />
          <Button title="-" onPress={() => decreaseScore('B')} />
        </View>
      </View>

      {/* Tombol Reset */}
      <Button title="Reset Pertandingan" onPress={resetScores} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
});

export default FutsalScoreApp;
