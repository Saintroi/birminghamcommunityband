import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'apollo-boost';
import config from './config';
import { buildQueryFromSelectionSet } from 'apollo-utilities';

// Queries / Mutations

const LOGIN = gql`
  mutation login($input: loginInput!) {
    createUser(loginInput: $input) {
      email
      pword
    }
  }
`;

// JS

function auth(props) {
  function useLogin(email, password) {
    const [loginResponse, { loading, error }] = useMutation(LOGIN);
    console.log(loginResponse);
    loginResponse({
      variables: {
        input: {
          email: email,
          pword: password
        }
      }
    });

    return loginResponse.success;
  }
}

export default auth;
