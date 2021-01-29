import React from "react";
import apiKeyCountry from "./apiKeyCountry";
import ApiKey from "./apiKeyCountry";
import ApiResponse from "./apiResponse";
const ApiPart = ({
  stepApi,
  nextStep2,
  prevStep2,
  /* */
  currentCountry,
  setCurrentCountry,
  /* */
  setCurrentApiType,
  currentApiType,
  /* */
  setCurrentApiMethods,
  currentApiMethods,
  /* */
  resultApiData,
  setResultApiData,
  /* */
  setCurrentName,
  currentName,
}) => {
  debugger;
  switch (stepApi) {
    case 1:
      return (
        <ApiKey
          prevStep2={prevStep2}
          nextStep2={nextStep2}
          setCurrentCountry={setCurrentCountry}
          currentCountry={currentCountry}
          currentApiType={currentApiType}
          setCurrentApiType={setCurrentApiType}
          setCurrentApiMethods={setCurrentApiMethods}
          currentApiMethods={currentApiMethods}
          resultApiData={resultApiData}
          setResultApiData={setResultApiData}
        ></ApiKey>
      );
    case 2:
      return (
        <ApiResponse
          prevStep2={prevStep2}
          resultApiData={resultApiData}
          setResultApiData={setResultApiData}
          setCurrentName={setCurrentName}
          currentName={currentName}
        ></ApiResponse>
      );
    default:
      return <div>DENEME</div>;
  }
};

export default ApiPart;
