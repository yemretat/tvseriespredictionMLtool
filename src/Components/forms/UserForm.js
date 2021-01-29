import React, { useState } from "react";
import { render } from "@testing-library/react";
import CountrySelect from "./CountrySelector";
import CastSelector from "./CastSelector";
import Casts from "./deneme";
import CompanySelector from "./CompanySelector";
import DirectorSelector from "./DirectorSelector";
import ProducerSelector from "./ProducerSelector";
import DistributorSelector from "./DistributorSelector";
import GenreesSelector from "./GenreesSelector";
import KeyWordsSelector from "./KeyWordsSelector";
import Confirm from "./Confirm";
import ParentsGuide from "./ParentsGuide";
import CertificateSelector from "./CertificateSelector";
import Chart from "./Chart";
const UserForm = ({
  changeCurrentCast,
  changeCurrentCompanies,
  changeCurrentName,
  changeCurrentDirectors,
  changeCurrentProducers,
  changeCurrentDistributor,
  changeCurrentGenrees,
  changeCurrentKeyWords,
  step,
  changeCountry,
  nextStep,
  setCurrentCountry,
  /* */
  countryCasts,
  currentCasts,
  setCurrentCast,
  /* */
  countryCompanies,
  currentCompanies,
  setCurrentCompanies,
  /* */
  countryDirectors,
  currentDirectors,
  setCurrentDirectors,
  /* */
  countryProducers,
  currentProducers,
  setCurrentProducers,
  /* */
  countryDistributors,
  currentDistributors,
  setCurrentDistributors,
  /* */
  countryGenrees,
  currentGenrees,
  setCurrentGenrees,
  /* */
  countryKeyWords,
  currentKeywords,
  setCurrentKeywords,
  /* */
  countryHarmfulContents,
  currentHarmfulContents,
  setCurrentHarmfulContents,
  /**/
  countryCertificate,
  setCurrentCertificate,
  currentCertificate,
  /* */
  setResponseData,
  responseData,
  prevStep,

  currentName,
  currentCountry,
}) => {
  switch (step) {
    case 1:
      return (
        <CountrySelect
          changeCountry={changeCountry}
          nextStep={nextStep}
          currentCountry={currentCountry}
          setCurrentCountry={setCurrentCountry}
        ></CountrySelect>
      );

    case 2:
      return (
        <Casts
          countryCasts={countryCasts}
          nextStep={nextStep}
          prevStep={prevStep}
          setCurrentCast={setCurrentCast}
          currentCasts={currentCasts}
          changeCurrentCast={changeCurrentCast}
          currentCountry={currentCountry}
        ></Casts>
      );
    case 3:
      return (
        <CompanySelector
          currentCompanies={currentCompanies}
          setCurrentCompanies={setCurrentCompanies}
          prevStep={prevStep}
          nextStep={nextStep}
          countryCompanies={countryCompanies}
          changeCurrentCompanies={changeCurrentCompanies}
        ></CompanySelector>
      );
    case 4:
      return (
        <DirectorSelector
          countryDirectors={countryDirectors}
          changeCurrentDirectors={changeCurrentDirectors}
          prevStep={prevStep}
          nextStep={nextStep}
          setCurrentDirectors={setCurrentDirectors}
          currentDirectors={currentDirectors}
        ></DirectorSelector>
      );
    case 5:
      return (
        <ProducerSelector
          countryProducers={countryProducers}
          changeCurrentProducers={changeCurrentProducers}
          prevStep={prevStep}
          nextStep={nextStep}
          currentProducers={currentProducers}
          setCurrentProducers={setCurrentProducers}
        ></ProducerSelector>
      );

    case 6:
      return (
        <DistributorSelector
          prevStep={prevStep}
          nextStep={nextStep}
          countryDistributors={countryDistributors}
          changeCurrentDistributor={changeCurrentDistributor}
          setCurrentDistributors={setCurrentDistributors}
          currentDistributors={currentDistributors}
        ></DistributorSelector>
      );

    case 7:
      return (
        <GenreesSelector
          prevStep={prevStep}
          nextStep={nextStep}
          changeCurrentGenrees={changeCurrentGenrees}
          countryGenrees={countryGenrees}
          setCurrentGenrees={setCurrentGenrees}
          currentGenrees={currentGenrees}
        ></GenreesSelector>
      );

    case 8:
      return (
        <KeyWordsSelector
          prevStep={prevStep}
          nextStep={nextStep}
          changeCurrentKeyWords={changeCurrentKeyWords}
          countryKeyWords={countryKeyWords}
          setCurrentKeyWords={setCurrentKeywords}
          currentKeywords={currentKeywords}
        ></KeyWordsSelector>
      );
    case 9:
      return (
        <ParentsGuide
          prevStep={prevStep}
          nextStep={nextStep}
          countryHarmfulContents={countryHarmfulContents}
          setCurrentHarmfulContents={setCurrentHarmfulContents}
          currentHarmfulContents={currentHarmfulContents}
        ></ParentsGuide>
      );
    case 10:
      return (
        <CertificateSelector
          prevStep={prevStep}
          nextStep={nextStep}
          countryCertificate={countryCertificate}
          setCurrentCertificate={setCurrentCertificate}
          currentCertificate={currentCertificate}
        ></CertificateSelector>
      );
    case 11:
      return (
        <Confirm
          prevStep={prevStep}
          nextStep={nextStep}
          currentCountry={currentCountry}
          currentCasts={currentCasts}
          currentCompanies={currentCompanies}
          currentDirectors={currentDirectors}
          currentProducers={currentProducers}
          currentDistributors={currentDistributors}
          currentGenrees={currentGenrees}
          currentKeywords={currentKeywords}
          currentHarmfulContents={currentHarmfulContents}
          currentCertificate={currentCertificate}
          setResponseData={setResponseData}
        ></Confirm>
      );
    case 12:
      return (
        <Chart
          prevStep={prevStep}
          nextStep={nextStep}
          currentResponseData={responseData}
        ></Chart>
      );

    default:
      return <h1>Default Screen</h1>;
  }
};
export default UserForm;
