import requests

url = "http://127.0.0.1:5000/company"

f = open("payload.json", "r", encoding="utf-8")
payload = f.readline()
f.close()

response = requests.post(url, json=payload)

print(response.json())