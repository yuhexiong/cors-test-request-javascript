# Cors Test Request  

A simple frontend browser for testing whether backend services have CORS enabled.  



## Overview  
- Packages: npm v10.8.1  



## Run  

Modify the `API` variable in the code to the endpoint you want to test.  

### Install Module  
```bash
npm install -g http-server
```  

### Run  
```bash
http-server -p 8080
```  

The service will run on `localhost:8000`.  



## UI  

- Frontend Interface  
![ui](ui.png)  

- Success Response  
![success](success.png)  

- Failed Response  
![failed](failed.png)  