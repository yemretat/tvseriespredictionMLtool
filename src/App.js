import React, { useState, useEffect, Component } from "react";
import "./App.css";
import axios from "axios";
import UserForm from "./Components/forms/UserForm";
import ButtonAppBar from "./Components/ui/AppBar2";
import { Button } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import ApiKey from "./Components/apikismi/apiKeyCountry";
import ApiPart from "./Components/apikismi/apiPart";
import * as common from "./common";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [apiStep, setApiStep] = useState(1);

  const [currentCountry, setCurrentCountry] = useState({});

  const [countryCasts, setCountryCasts] = useState([]); /// Bu bir ülkenin casti
  const [currentCasts, setCurrentCast] = useState([]); /// Bu seçilen cast

  const [countryCompanies, setCountryCompanies] = useState([]);
  const [currentCompanies, setCurrentCompanies] = useState([]);

  const [countryDirectors, setCountryDirectors] = useState([]);
  const [currentDirectors, setCurrentDirectors] = useState([]);

  const [countryProducers, setCountryProducers] = useState([]);
  const [currentProducers, setCurrentProducers] = useState([]);

  const [countryDistributors, setCountryDistributors] = useState([]);
  const [currentDistributors, setCurrentDistributors] = useState([]);

  const [countryGenrees, setCountryGenrees] = useState([]);
  const [currentGenrees, setCurrentGenrees] = useState([]);

  const [countryKeywords, setCountryKeywords] = useState([]);
  const [currentKeywords, setCurrentKeywords] = useState([]);

  const [countryHarmfulc, setCountryHarmfulc] = useState([]);
  const [currentHarmfulc, setCurrentHarmfulc] = useState([]);

  const [countryCertificate, setCountryCertificate] = useState([]);
  const [currentCertificate, setCurrentCertificate] = useState({});

  const [currentApiType, setCurrentApiType] = useState({});
  const [currentApiMethods, setCurrentApiMethods] = useState({});
  const [resultApiData, setResultApiData] = useState({});

  const [responseData, setResponseData] = useState({});

  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "Certificate/getCertificatebycountryid";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryCertificate(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "HarmfulContent/getharmfulContentbycountryid";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryHarmfulc(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "KeyWord/getKeywordbycountryid";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryKeywords(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "KeyWord/getKeywordbycountryid";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryKeywords(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "Genree/getGenreebycountryId";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryGenrees(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "Distributor/getDistributorsbycountryid";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryDistributors(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "Producer/getProducerbycountryid";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryProducers(result.data);
      } else {
        const result = await axios(common.uri + "Producer/getall");
        setCountryProducers(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "Producer/getProducerbycountryid";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryProducers(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "Director/getDirectorbycountryid";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryDirectors(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      console.log(currentCountry);
      if (currentCountry.id !== undefined) {
        let url = common.uri + "Castss/getlistbycategory";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryCasts(result.data);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      // debugger;
      if (currentCountry.id !== undefined) {
        let url = common.uri + "Company/getCompanybycountryid";
        url += "?countryId=" + currentCountry.countryId;
        const result = await axios(url);
        setCountryCompanies(result.data);
      }
    };
    fetchItems();
  }, [currentCountry]);
  const nextStep = () => {
    setStep(step + 1);
    //const {step} =this.state
    // this.setState({step:step+1})
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const nextStep2 = () => {
    setApiStep(apiStep + 1);
  };
  const prevStep2 = () => {
    setApiStep(apiStep - 1);
  };
  const addtoCastArray = (cast) => {
    //debugger;

    let newCurrentCasts = currentCasts;
    var addedItem = newCurrentCasts.find((c) => c.id === cast.id);
    if (addedItem) {
      let newCart = currentCasts.filter((c) => c.id !== cast.id);
      setCurrentCast(newCart);
    } else {
      newCurrentCasts.push(cast);
      setCurrentCast(newCurrentCasts);
    }
  };

  const addtoCompanyArray = (company) => {
    // debugger;
    let newCompanyCast = currentCompanies;
    var addedItem = newCompanyCast.find((c) => c.id === company.id);
    if (addedItem) {
      let newCart = currentCompanies.filter((c) => c.id !== company.id);
      setCurrentCompanies(newCart);
    } else {
      newCompanyCast.push(company);
      setCurrentCompanies(newCompanyCast);
    }
  };

  const addtoDirectorArray = (director) => {
    // debugger;
    let newDirectorCast = currentDirectors;
    var addedItem = newDirectorCast.find((c) => c.id === director.id);
    if (addedItem) {
      let newCart = newDirectorCast.filter((c) => c.id !== director.id);
      setCurrentDirectors(newCart);
    } else {
      newDirectorCast.push(director);
      setCurrentDirectors(newDirectorCast);
    }
  };

  const addtoProducerArray = (producer) => {
    //   debugger;
    let newProducers = currentProducers;
    var addedItem = newProducers.find((c) => c.id === producer.id);
    if (addedItem) {
      let newCart = newProducers.filter((c) => c.id !== producer.id);
      setCurrentProducers(newCart);
    } else {
      newProducers.push(producer);
      setCurrentProducers(newProducers);
    }
  };

  const addtoDistributorsArray = (distributor) => {
    let newDistributors = currentDistributors;
    var addedItem = newDistributors.find((c) => c.id === distributor.id);
    if (addedItem) {
      let newCart = newDistributors.filter((c) => c.id !== distributor.id);
      setCurrentDistributors(newCart);
    } else {
      newDistributors.push(distributor);
      setCurrentDistributors(newDistributors);
    }
  };
  const addtoGenreesArray = (genree) => {
    let newGenrees = currentGenrees;
    var addedItem = newGenrees.find((c) => c.id === genree.id);
    if (addedItem) {
      let newCart = newGenrees.filter((c) => c.id !== genree.id);
      setCurrentGenrees(newCart);
    } else {
      newGenrees.push(genree);
      setCurrentGenrees(newGenrees);
    }
  };
  const addtokeywordsArray = (keyword) => {
    let newkeyword = currentKeywords;
    var addedItem = newkeyword.find((c) => c.id === keyword.id);
    if (addedItem) {
      let newCart = newkeyword.filter((c) => c.id !== keyword.id);
      setCurrentKeywords(newCart);
    } else {
      newkeyword.push(keyword);
      setCurrentKeywords(newkeyword);
    }
  };

  return (
    <div>
      {" "}
      <ButtonAppBar />
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <UserForm
                {...props}
                step={step}
                changeCountry={setCurrentCountry}
                changeCurrentCast={addtoCastArray}
                changeCurrentCompanies={addtoCompanyArray}
                changeCurrentDirectors={addtoDirectorArray}
                changeCurrentProducers={addtoProducerArray}
                changeCurrentDistributor={addtoDistributorsArray}
                changeCurrentGenrees={addtoGenreesArray}
                changeCurrentKeyWords={addtokeywordsArray}
                /*Buraya Kadar !! */
                setCurrentCountry={setCurrentCountry}
                currentCountry={currentCountry}
                /* */
                setCurrentCast={setCurrentCast}
                countryCasts={countryCasts}
                currentCasts={currentCasts}
                /**/
                countryCompanies={countryCompanies}
                currentCompanies={currentCompanies}
                setCurrentCompanies={setCurrentCompanies}
                /**/
                countryDirectors={countryDirectors}
                currentDirectors={currentDirectors}
                setCurrentDirectors={setCurrentDirectors}
                /**/
                countryProducers={countryProducers}
                currentProducers={currentProducers}
                setCurrentProducers={setCurrentProducers}
                /* */
                countryDistributors={countryDistributors}
                currentDistributors={currentDistributors}
                setCurrentDistributors={setCurrentDistributors}
                /* */
                countryGenrees={countryGenrees}
                currentGenrees={currentGenrees}
                setCurrentGenrees={setCurrentGenrees}
                /**/
                countryKeyWords={countryKeywords}
                setCurrentKeywords={setCurrentKeywords}
                currentKeywords={currentKeywords}
                /* */
                countryHarmfulContents={countryHarmfulc}
                setCurrentHarmfulContents={setCurrentHarmfulc}
                currentHarmfulContents={currentHarmfulc}
                /* */
                countryCertificate={countryCertificate}
                setCurrentCertificate={setCurrentCertificate}
                currentCertificate={currentCertificate}
                /* */
                /* */
                setResponseData={setResponseData}
                responseData={responseData}
                /* */

                /* */
                nextStep={nextStep}
                prevStep={prevStep}
                changeCurrentName={setCurrentName}
                currentName={currentName}
              ></UserForm>
            )}
          />
          <Route
            exact
            path="/ApiService"
            render={(props) => (
              <ApiPart
                {...props}
                stepApi={apiStep}
                nextStep2={nextStep2}
                prevStep2={prevStep2}
                setCurrentCountry={setCurrentCountry}
                currentCountry={currentCountry}
                currentApiType={currentApiType}
                setCurrentApiType={setCurrentApiType}
                setCurrentApiMethods={setCurrentApiMethods}
                currentApiMethods={currentApiMethods}
                resultApiData={resultApiData}
                setResultApiData={setResultApiData}
              ></ApiPart>
            )}
          />
        </Switch>
      </div>
    </div>
  );
};
export default App;
