const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/submit', (req, res) => {
  let body = req.body
  let response = []
  for (let companyData of body["hits"]["hits"]) {
    let company = companyData["_source"]["Vrvirksomhed"]
    
    let companyName = company["virksomhedMetadata"]["nyesteNavn"]["navn"]
    let currentLocation = company["virksomhedMetadata"]["nyesteBeliggenhedsadresse"]

    let address = {
      address: `${currentLocation["vejnavn"]} ${currentLocation["husnummerFra"]}`,
      postalCode: currentLocation["postnummer"],
      city: currentLocation["postdistrikt"]
    }
    
    let contact = { phoneNumber: company["telefonNummer"], email: company["obligatoriskEmail"] }

    let status = company["virksomhedMetadata"]["sammensatStatus"]
    let companyForm = company["virksomhedMetadata"]["nyesteVirksomhedsform"]["langBeskrivelse"]
    let industry = company["virksomhedMetadata"]["nyesteHovedbranche"]["branchetekst"]

    response.push({ companyName, address, contact, status, companyForm, industry })
  }

  return res.json(response)
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})