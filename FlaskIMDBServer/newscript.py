# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from sklearn.externals import joblib
import pandas as pd
import numpy as np

# Your API definition
#error = Error: Network Error at createError (http://localhost:3001/static/js/1.chunk.js:64837:15) at XMLHttpRequest.handleError (http://localhost:3001/static/js/1.chunk.js:64332:14)

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/predict', methods=['POST'])
@cross_origin()

def predict():
    if KnnModel:
        try:
            json_ = request.json
            print(json_)
            for key,value in json_.items():
              print(key)

              
              if key=="cast":
                castarray=[]
                casttoplam=0
                if len(value) > 0:
                    for i in value:
                        print(i["totalpoint"])
                        castarray.append(i["totalpoint"])
                    sortedarray=np.sort(castarray)
                    sortedarray=castarray[::-1]
                    if len(sortedarray)>10 or len(sortedarray) == 10:
                        for i in range(10):
                            casttoplam+=sortedarray[i]
                        casttoplam=casttoplam/10
                    else:
                        for i in range(len(sortedarray)):
                            casttoplam += sortedarray[i]
                        casttoplam = (casttoplam/len(sortedarray))-1
                print("casttoplam")
                print(casttoplam)
                print("*" * 80)
              
              if key=="companies":
                companiesarray=[]
                companiestoplam=0  
                if len(value)>0:
                    for i in value:
                        print(i["totalpoint"])
                        companiesarray.append(i["totalpoint"])
                    companiestoplam=np.sum(companiesarray)
                    companiestoplam=companiestoplam/len(companiesarray)
                print(companiestoplam)
                print("*" * 80)    
                                                                       
              if key=="directors":
                directorsarray=[]
                directorstoplam=0  
                if len(value) >0:
                    for i in value:
                        print(i["totalpoint"])
                        directorsarray.append(i["totalpoint"])
                    sortedarray=np.sort(directorsarray)      
                    sortedarray=sortedarray[::-1]
                    if len(directorsarray)>3 or len(directorsarray)==3:
                        directorstoplam=((sortedarray[0]+sortedarray[1]+sortedarray[2])/3)+1
                    elif len(directorsarray) == 2:
                        directorstoplam=((sortedarray[0]+sortedarray[1])/2)
                    elif len(directorsarray) == 1:
                        directorstoplam=sortedarray[0]-1
                print(directorstoplam)
                print("*" * 80)
              
              if key=="producers":
                producerarray=[]
                producerstoplam=0
                if len(value) > 0:
                    for i in value:
                        print(i["totalpoint"])
                        producerarray.append(i["totalpoint"])
                    sortedarray=np.sort(producerarray)
                    sortedarray=sortedarray[::-1]
                    if len(producerarray)>3 or len(producerarray)==3:
                        producerstoplam=((sortedarray[0]+sortedarray[1]+sortedarray[2])/3)+1
                    elif len(producerarray) == 2:
                        producerstoplam=((sortedarray[0]+sortedarray[1])/2)
                    elif len(producerarray) == 1:
                        producerstoplam=sortedarray[0]-1
                print(producerstoplam)
                print("*" * 80)
              
              if key=="distributors":
                distributorarray=[]
                distributorstoplam=0
                if len(value)>0:
                    for i in value:
                       print(i["totalpoint"])
                       distributorarray.append(i["totalpoint"])
                    sortedarray=np.sort(distributorarray)
                    sortedarray=sortedarray[::-1]
                    if len(distributorarray)>3 or len(distributorarray)==3:
                        distributorstoplam=((sortedarray[0]+sortedarray[1]+sortedarray[2])/3)+1
                    elif len(distributorarray) == 2:
                        distributorstoplam=((sortedarray[0]+sortedarray[1])/2)
                    elif len(producerarray) == 1:
                        distributorstoplam=sortedarray[0]-1
                print(distributorstoplam)  
                print("*"* 80)
              if key=="genrees":
                genreesarray=[]
                genreestoplam=0
                if len(value) > 0:
                    for i in value:
                        print(i["totalpoint"])
                        genreesarray.append(i["totalpoint"])
                    sortedarray=np.sort(genreesarray)
                    sortedarray=sortedarray[::-1]
                    if len(genreesarray)>3 or len(genreesarray)==3:
                        genreestoplam=((sortedarray[0]+sortedarray[1]+sortedarray[2])/3)+1
                    elif len(genreesarray) == 2:
                        genreestoplam=((sortedarray[0]+sortedarray[1])/2)
                    elif len(producerarray) == 1:
                        genreestoplam=sortedarray[0]-1
                print(genreestoplam)  
                print("*" *80)
            
              
              if key=="keywords":
                keywordsarray=[]
                keywordstoplam=0  
                if len(value) > 0:
                  for i in value:
                    print(i["totalpoint"])
                    keywordsarray.append(i["totalpoint"])
                  sortedarray=np.sort(keywordsarray)
                  sortedarray=sortedarray[::-1]  
                  if len(keywordsarray)>3 or len(keywordsarray)==3:
                      keywordstoplam=((sortedarray[0]+sortedarray[1]+sortedarray[2])/3)+1
                  elif len(keywordsarray) == 2:
                      keywordstoplam=((sortedarray[0]+sortedarray[1])/2)
                  elif len(producerarray) == 1:
                      keywordstoplam=sortedarray[0]-1   
                print(keywordstoplam)  
                print("*" *80)
                
              if key == "harmfulcontents":
                  harmfulcontents=[]
                  harmfulcontentstoplam=0
                  if len(value)>0:
                      harmfulcontentstoplam =len(value)
                  print(harmfulcontentstoplam)
              
              if key=="certificate":
                  certificatename="0"
                  certificatecontents=[]
                  if not value is None:
                     x=value["name"]
                     certificatecontents.append(value["name"])
                     certificatename=certificatecontents[0]
                  print(certificatename)
                
                                      
            jsonmodel=[{'keywordscontentspoint':keywordstoplam,'CompanyNamesAverage':companiestoplam,'directorpoint':directorstoplam,'CastPuan':casttoplam,'producerpoint':producerstoplam,'distributorspoint':distributorstoplam,'GenreesPoint':genreestoplam,'Harmful Number':harmfulcontentstoplam,'certificate':certificatename.strip()}]              
            query = pd.get_dummies(pd.DataFrame(jsonmodel))
            query = query.reindex(columns=model_columns, fill_value=0)

            Knn_prediction = list(KnnModel.predict(query))
            DecisionTree_prediction=list(DecisionTreeModel.predict(query))
            RandomForest_prediction=list(RandomForestModel.predict(query))
            
            Knn_predictionnumber=int(Knn_prediction[0])
            DecisionTree_predictionnumber=int(DecisionTree_prediction[0])
            RandomForest_predictionnumber=int(RandomForest_prediction[0])
            
            people = [{'KNN_prediction':Knn_predictionnumber, 'DecisionTree_prediction':DecisionTree_predictionnumber, "RandomForest_prediction":RandomForest_predictionnumber},
            {'KNN_accuracyscore': 0.6013, 'DecisionTree_accuracyscore': 0.5871,"RandomForest_accuracyscore":0.6197}]
            return jsonify(people) 

        except: 

                return jsonify({'trace': traceback.format_exc()})
    else:
        print ('Train the model first')
        return ('No model here to use')

if __name__ == '__main__':
    try:
        port = int(sys.argv[1]) # This is for a command-line input
    except:
        port = 123456 # If you don't provide any port the port will be set to 12345

    KnnModel = joblib.load("imdbmodel.pkl") # Load "model.pkl"
    DecisionTreeModel=joblib.load("imdbDecisionTreeModel.pkl")
    RandomForestModel=joblib.load("RandomForestmodel.pkl")
    print ('Models are loaded')
    model_columns = joblib.load("imdbmodel_columns.pkl") # Load "model_columns.pkl"
    print ('Model columns loaded')

    app.run(port=port, debug=True,use_reloader=False)



# %%



