import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import {AmplifyChatbot} from "@aws-amplify/ui-react";

Amplify.configure({
  Auth: {
    identityPoolId: 'eu-central-1:1aa808d4-58cb-4c9c-b069-a69ccc8d4437',
    region: 'eu-central-1'
  },
  Interactions: {
    bots: {
      "OrderFlowers": {
        "name": "OrderFlowers",
        "alias": "$LATEST",
        "region": "eu-central-1",
      },
    }
  }
});


function App() {
  return (
    <AmplifyChatbot
      botName="OrderFlowers"
      botTitle="Esure"
      welcomeMessage="Hi Joanna, How can I help you?"
    />
  );

}

export default App;
