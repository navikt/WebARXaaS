import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import handleRequest from '../../../../util/handleRequest';

const AnonymizeButton = (props) => {
  const {
    setOperation, setLoadingAnonymize,
    dataset, attributes, privacyModels, suppressionLimit,
    endpoint, setResponse,
  } = props;

  const content = (
    <div className="anonymize-button analyze-anonymize-button">
      <Knapp onClick={() => {
        setOperation('Anonymize');
        setLoadingAnonymize(true);
        handleRequest(setLoadingAnonymize, 'anonymize', dataset, attributes, privacyModels, suppressionLimit, endpoint, setResponse);
      }}
      >
        Start anonymization
      </Knapp>
    </div>
  );
  return content;
};
export default AnonymizeButton;
