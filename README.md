### Task 

Write a simple web service that parses the json file found in src/payload.json  
and returns a json response containing the fields listed below.  
The file contains public data from the CVR registry. For reference, see https://datacvr.virk.dk/data/visenhed?enhedstype=virksomhed&id=40863753&language=da  
The dataset contains keys that have names in danish. Some translation is needed.  


* Company Name
* Address 
* Postal code and City
* Phone number and email
* Status 
* Company form
* Industry 

Fork this repository and send us a pull request with your solution. 


##############################
How to run:
I have used the flask framework which needs to be installed with:
python -m pip install flask

If you're on Linux or macOS you need to run the following command inside the folder that contains webservice.py:
export FLASK_APP=webservice.py

If you're on Windows run this command instead:
set FLASK_APP=webservice.py

Then run the following command to start up a server with the web service:
flask run

When the server is running run the client with:
python client.py