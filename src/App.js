import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';

//import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ isPassedToWithAuthenticator, signOut, user }) {
  //if (!isPassedToWithAuthenticator) {
  //  throw new Error(`isPassedToWithAuthenticator was not provided`);
  //}

  return (
    // <Authenticator>
    //  {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <h1>Hello {user.username}</h1>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p><button onClick={signOut}>Sign out</button></p>
          </header>
          
        </div>
    //  )}
    //</Authenticator>
  );
}

//export default App;
export default withAuthenticator(App);

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}