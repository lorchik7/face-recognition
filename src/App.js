import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particlesOptions = {
  particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 400
        }
      }
  }
};

const app = new Clarifai.App({
 apiKey: '6e7b3358503b4e2d9f6216d763035cf7'
});

class App extends Component {
  constructor()  {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});

    app.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then( 
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        //console.log(err);
      }
    );  
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" 
          params={particlesOptions}
        />
        <Navigation/>
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}


export default App;
