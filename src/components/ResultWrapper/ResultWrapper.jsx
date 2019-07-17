import React from 'react';
import AnalysisWrapper from './AnalysisWrapper/AnalysisWrapper';

const ResultWrapper = (props) => {
  const {
    response, setResponse, loadingAnalysis, operation,
  } = props;
  const { message, reIdentificationRisk } = response;

  let content = (
    <div className="result-wrapper">
      <AnalysisWrapper loadingAnalysis={loadingAnalysis} />
    </div>
  );

  if (message) {
    content = (
      <div className="result-wrapper">
        <b>Something went wrong. Error:</b>
        <br />
        {message}
      </div>
    );
  }
  if (operation === 'Anonymize') {
    content = (
      <div className="result-wrapper">
        placeholder for anonymization result
      </div>
    );
  } if (operation === 'Analyze' && reIdentificationRisk) {
    content = (
      <div className="result-wrapper">
        <AnalysisWrapper response={response} loadingAnalysis={loadingAnalysis} />
      </div>
    );
  } if (operation === 'Import') {
    setResponse('');
  }

  return content;
};
export default ResultWrapper;
