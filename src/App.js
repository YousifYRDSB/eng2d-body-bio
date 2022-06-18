import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {

  const [modalNumber, setModalNumber] = useState(0);

  var quote = modalNumber == 1 ? `“he [Jack] was tall, thin, and bony; and his hair was
  red beneath the black cap. His face was crumpled and freckled, and ugly
  without silliness. Out of this face stared two light blue eyes, frustrated
  now, and turning, or ready to turn, to anger.” (Golding, 25)
  `
  : (modalNumber == 2 ? `“‘He’s going to beat Wilfred.’
  ‘What for?’
  Robert shook his head doubtfully.
  ‘I don’t know. He didn’t say. He got angry and made us tie Wilfred up.
  He’s been’—he giggled excitedly—’he’s been tied for hours, waiting—’
  “But didn’t the chief say why?”
  ‘I never heard him.’” (Golding, 229)
  ` : `“‘Bollocks to the rules! We’re strong—we hunt! If there’s a beast, we’ll
  hunt it down! We’ll close in and beat and beat and beat—!’” (Golding, 130)
  `)

  var analysis = modalNumber == 1 ? "Straight from the beginning of the book, Jack always displayed a stern, angry look. This plays well into his role as a leader and says a lot about the type of character he is especially as the plot goes on."
  : (modalNumber == 2 ? "Throughout the development of the story, we see Jack becoming more extreme and tyrannical with his leadership, especially as he branches off into his own group. This is displayed when Wilfred is tortured for seemingly no reason, and is a display of Jacks’ influence and absolute power; a symbol of total corruption." : 
  `Jack's role as a hunter is very important and sentimental to his role in the plot. Hunters are fearless and go for the kill. This quote displays his attitude and the savagery displayed through Jack and his hunting tribe, a ‘degradation’ of civility necessary for survival. Not to mention that in the story Jack harnesses the fear of the beast to gain more power as well.
  
  In the other hand there is a cracked conch shell. The conch shell a symbol for civilization and democratic discourse, which has been tarnished and corrupted in place for Jack and his rule in the group.
  `)

  useEffect(() => {
    document.title = ` ${modalNumber} Body Biography`;
  },[modalNumber]);

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{margin:"0"}} className="thesis-statement" >
        Lord of the flies body biography: Jack
        </h1>
        <p className="thesis-statement" >
        "Jack is a manifestation of mans’ inherent <br/> evil in the stride for survival."
        </p>
        <div className="image-container">
        <img src="https://i.imgur.com/kztcuMG.png" className="jack-image" alt="JACK" />
          <div className="jack-head" onClick={() => setModalNumber(1)}></div>
          <div className="jack-heart" onClick={() => setModalNumber(2)}></div>
          <div className="jack-hand" onClick={() => setModalNumber(3)}></div>
          </div>
        <div className="instruction">Click on Jack's body parts (blue circles) for analysis</div>
      </header>

      <footer>Yousif Aldakoki - ENG2D 2022</footer>

      <Modal show={modalNumber != 0} onHide={() => setModalNumber(0)}>
        <Modal.Header closeButton>
          <Modal.Title>"{quote}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>{analysis}</Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
