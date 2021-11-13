### Description
### Task 

A simple web service that parses the json file found in server/payload.json  
and returns a json response containing the fields listed below.  
The file contains public data from the CVR registry. For reference, see https://datacvr.virk.dk/data/visenhed?enhedstype=virksomhed&id=40863753&language=da  
The dataset contains keys that have names in danish. Some translation is needed.  

* Company Name
* Address 
* Postal code and City
* Phone number and email
* Status 
* Company form

### Build and run using Docker  
### Build and start server  
docker build -t server -f Dockerfile .  
docker run -it -p 8080:8080 server  

### Build and start client  

### Build and run without Docker
### Setup locally
Make sure node.js and npm packet manager are installed in you machine.  
Download node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)   

You can verify by running in the command line, example:    
  ```node -v```  --> ```v12.19.1```  
  ```npm -v```  --> ```6.14.8```   
  
Clone the repo locally and cd at "server" folder.  
At the root directory of "server" folder run the following command:  
```bash
npm install
```  
The above command will get all dependencies needed to run the application.  
The packages are specified in package.json and package-lock.json file.  
  
### Start the server  
At the root directory run from the terminal the command:  
```bash
node app.js
```  
This is the entry point of the appication.  
The server will start running and listening on port 8080.  
The output ```http server listening at port 8080``` will be printed in the terminal.  
Open your broswer and go to ```http://localhost:8080/info``` and you should see the returned information in a json format.      
 
### Start the client
After starting the server successfully, go inside the client folder and     
at the root directory run from the terminal the command:  
```bash
npm install
```  
This will install all the dependencis needed to run the client app.  

To start the client at the root directory of the client folder run:     
```bash
npm start
```
The above will start the client application on port 3000.  
Will start the broswer on```http://localhost:3000``` and display the company information.
      
### Run the unit tests  
To test the application and run the unit tests  
got to the root directory of the folder server and    
run the following command from the terminal:  
```bash
  npm test
```  
This should run all unit test in test folder and should see  
the description and result of each unit test in the terminal. 

### Example:
```
 ~/Documents/VismaProject/task/server (master)$ npm test  

> web-service@1.0.0 test C:\Users\testuser2\Documents\VismaProject\task\server
> mocha

[web-service] http server listening at port 8080


  /GET data
    ✔ it should GET all the data

  Test filter function
    ✔ expects valid data from filter 

  Test data have valid key navn
    ✔ expects valid data navn 

  Test data have valid key vejnavn
    ✔ expects valid data vejnavn

  Test data have valid key husnummerFra
    ✔ expects valid data husnummerFra

  Test data have valid key postnummer
    ✔ expects valid data postnummer

  Test data have valid key postdistrikt
    ✔ expects valid data postdistrikt

  Test data have valid key telefonNummer
    ✔ expects valid data telefonNummer

  Test data have valid key obligatoriskEmail
    ✔ expects valid data obligatoriskEmail

  Test data have valid key status
    ✔ expects valid data status

  Test data have valid key langBeskrivelse
    ✔ expects valid data langBeskrivelse

  Test data have valid key branchekode
    ✔ expects valid data branchekode


  12 passing (62ms)
  ```