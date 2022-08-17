import requests
from bs4 import BeautifulSoup
import json
name = input()
nameAPI = name.replace(" ","+")
response = requests.get("https://api.themoviedb.org/3/search/movie?api_key=fe9a0e4d83ef27e4c0e80ff2da94b0ac&query="+nameAPI)
API = json.loads(response.text)
titel = API['results'][0]['original_title']
overview = API['results'][0]['overview']
rating = API['results'][0]['vote_average']
rating_people = API['results'][0]['vote_count']

print(titel)
print("\n")
print("Rating: ", rating)
print("Amount of rated peomle: ", rating_people)
print("\n")
print("Some information about the movie: ")
print(overview)
print("\n")
print("Staf:")
print("\n")
nameurl = name.replace(" ", "_")
url = "https://en.wikipedia.org/wiki/"+ nameurl
r = requests.get(url)
soup = BeautifulSoup(r.text, "html.parser")
firstItem = (soup.findAll('td',{"class" : "infobox-data"}))
lijst = []

for i in firstItem:
    lijst.append(i.get_text())
ian = "".join(lijst)
print(ian)