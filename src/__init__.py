"""
Created on Sun Oct 31 11:05:53 2021

@author: Seiran
"""


#import requests
import json


with open("payLoad.json") as json_file:
    
    data = json.load(json_file)
    data_json = data['hits']['hits'][0]['_source']['Vrvirksomhed']
    
    company_name = data_json['navne'][0]['navn']
    address = data_json['beliggenhedsadresse'][0]['vejnavn']+ ' ' + str(data_json['beliggenhedsadresse'][0]['vejkode'])+ ', ' + data_json['beliggenhedsadresse'][0]['postdistrikt']
    postal_code = data_json['beliggenhedsadresse'][0]['postnummer'] 
    city = data_json['beliggenhedsadresse'][0]['kommune']['kommuneNavn']
    phone_numbers = data_json['telefonNummer']  
    status = data_json['virksomhedsstatus'][0]['status'] 
    companyForm = data_json['virksomhedsform'][0]['virksomhedsformkode']
     
    
data_set = {"company_name":company_name, "address":address, "postal_code":postal_code, "city":city, "phone_numbers":phone_numbers, "status":status, "companyForm":companyForm }
json_dump = json.dumps(data_set)
print(json_dump)