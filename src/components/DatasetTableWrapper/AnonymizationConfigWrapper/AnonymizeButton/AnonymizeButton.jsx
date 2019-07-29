import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import handleRequest from '../../../../util/handleRequest';
import './__css__/AnonymizeButton.css';

const AnonymizeButton = (props) => {
  const {
    setOperation, setLoadingAnonymize,
    dataset, attributes, privacyModels, suppressionLimit,
    endpoint, setResponse,
  } = props;

  const content = (
    <div className="anonymize-button">
      <Knapp onClick={() => {
        setOperation('Anonymize');
        setLoadingAnonymize(true);
        handleRequest(setLoadingAnonymize, 'anonymize', endpoint, setResponse, dataset, attributes, privacyModels, suppressionLimit);
      }}
      >
        Start anonymization
      </Knapp>
    </div>
  );
  return content;
};
export default AnonymizeButton;
