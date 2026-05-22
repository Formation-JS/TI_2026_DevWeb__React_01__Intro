import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld.jsx';
import MessageDisplay from './components/MessageDisplay/MessageDisplay.jsx';

function App() {

  // Commentaire JS

  return (
    <>
      <h1>Demo 01 - Intro React</h1>
      
      {/* Commentaire JSX */}
      <HelloWorld firstname='Della' lastname='Duck' />

      <MessageDisplay message='Pause de midi !' />
      <MessageDisplay message='On continue' error={new Error('Nope ! Mangé !')} />
      <MessageDisplay message='Pause' isImportant={true} />
    </>
  );
}

export default App;
