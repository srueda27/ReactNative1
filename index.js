// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
    <Header text={'Albums'} />
);

/* Las llaves se pueden eliminar dado que no es necesario poner el return
  xq la Fat Arrow Function implicitamente está diciendo que hay un return
const App = () => {
  return (
      <Text>Some Text rigth here</Text>
    );
}

*/

// Render it to the device
AppRegistry.registerComponent('albums2', () => App);
