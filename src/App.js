import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { API, graphqlOperation } from 'aws-amplify';

//import { Authenticator } from '@aws-amplify/ui-react';
//import { Authenticator, SignIn, Greetings, AlwaysOn } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { listWiness, listStorages } from './graphql/queries';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

//function App({ isPassedToWithAuthenticator, signOut, user }) {
function App({ signOut, user }) {
  const [isLoading, setLoading] = useState(true);
  const [wines, setWines] = useState([]);

  //if (!isPassedToWithAuthenticator) {
  //  throw new Error(`isPassedToWithAuthenticator was not provided`);
  //}

  useEffect(() => {
    API.graphql(graphqlOperation(listWiness))
    .then((res) => {
      setWines(res.data.listWiness.items);
      setLoading(false);
      //console.log("Done fetching: ", res);
      //console.log("Type in fetching: " + typeof res);
    });
  }, [])

  if (isLoading) {
    return <h1>Loading</h1>
  } else {
    console.log("In Render part", wines);
    console.log("Type: " + typeof wines);
    return (
      <div>
        <h1>Hello {user.username} - Name: {wines[0].name}</h1>
        <br/ >
          {
            wines.map((wine) => (
              <div>
                <h1>{wine.name}</h1>
                <h2>{wine.type}</h2>
              </div>
            ))  
          }
        <button onClick={signOut}>Sign out</button>
      </div>
    )};
}

//export default App;
export default withAuthenticator(App);

//export async function getStaticProps() {
//  return {
//    props: {
//      isPassedToWithAuthenticator: true,
//    },
//  };
//}