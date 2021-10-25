import json
from flask import Flask, request

app = Flask("Task web service")

companiesInfo = []

def _parse_json(company):
    company_dict = json.loads(company, strict=False)
    Vrvirksomhed = company_dict["hits"]['hits'][0]["_source"]["Vrvirksomhed"]
    parsed_company = {}
    parsed_company["Company Name"] = Vrvirksomhed["virksomhedMetadata"]["nyesteNavn"]["navn"]
    parsed_company["Address"] = Vrvirksomhed["virksomhedMetadata"]["nyesteBeliggenhedsadresse"]["vejnavn"] + " " + str(Vrvirksomhed["virksomhedMetadata"]["nyesteBeliggenhedsadresse"]["husnummerFra"])
    parsed_company["Postal code and City"] = str(Vrvirksomhed["virksomhedMetadata"]["nyesteBeliggenhedsadresse"]["postnummer"]) + " " + Vrvirksomhed["virksomhedMetadata"]["nyesteBeliggenhedsadresse"]["postdistrikt"]
    parsed_company["Phone number and email"] = "".join(Vrvirksomhed["telefonNummer"]) + " " + "".join(Vrvirksomhed["obligatoriskEmail"])
    parsed_company["Status"] = Vrvirksomhed["virksomhedsstatus"][0]["status"]
    parsed_company["Company form"] = Vrvirksomhed["virksomhedMetadata"]["nyesteVirksomhedsform"]["langBeskrivelse"]
    parsed_company["Industry"] = Vrvirksomhed["hovedbranche"][0]["branchetekst"]
    return parsed_company

def _next_id():
    if len(companiesInfo) > 0:
        return max(company["id"] for company in companiesInfo) + 1
    return 1

#returns latest company to get post to web service
@app.get("/company")
def get_latest_company():
    if len(companiesInfo > 0):
        company = companiesInfo[-1]
        company.pop("id", None)
        return company
    return {"error": "No company info available"}


@app.post("/company")
def add_company():
    if request.is_json:
        company = request.get_json()
        company = _parse_json(company)
        company["id"] = _next_id()
        companiesInfo.append(company)
        company.pop("id", None)
        return company, 201
    return {"error": "Request must be in JSON format"}, 415