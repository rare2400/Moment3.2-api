# CV API
Enkel RESTful webbtjänst som hanterar arbetserfarenheter för att skapa ett CV. Skapat med hjälp av Node.js, Express och mongoose. 
Webbtjänsten stödjer CRUD-operationer i form av Create, Read, Update och Delete via olika endpoints.

## Länk
API länk: [https://rare2400-cvapi.onrender.com/api/workexperience](https://rare2400-cvapi.onrender.com/api/workexperience) 

## API endpoints

| Metod    | Endpoint                 | Beskrivning
| -------- | ------------------------ | ----------------------------------- |
| GET      | /api/workexperience      | Hämta alla arbetserfarenheter       |
| GET      | /api/workexperience/:id  | Hämta arbetserfarenhet med ID       |
| POST     | /api/workexperience      | Lägga till ny arbetserfarenhet      |
| PUT      | /api/workexperience/:id  | Uppdatera befintligarbetserfarenhet |
| DELETE   | /api/workexperience/:id  | Radera arbetserfarenhet med ID      |

**Objekt returneras/skickas som JSON**    
Exempel: GET `/api/workexperience/:id`     
id = 6887d3f0eb69874a2b3dd420:
```json
{
  "_id": "6887d3f0eb69874a2b3dd420",
  "companyName": "Kjell & Company",
  "jobTitle": "Säljare",
  "location": "Kalmar",
  "startDate": "2024-09-10T00:00:00.000Z",
  "endDate": "2025-03-10T00:00:00.000Z",
  "description": "Sålde elektronikprodukter, hanterade lager och leveranser",
  "__v": 0
}
```

## Verktyg
- Node.js
- Express
- Mongoose
- MongoDB Compass
- MongoDB Atlas
- dotenv
- cors

## Installation
1. **Klona repot:**
```bash
git clone https://github.com/rare2400/Moment3.2-api.git
cd Moment3.2-api
```

2. **Installera paket:**
```bash
npm install
```

3. **Installera nodemon för utveckling:**
```bash
npm install nodemon --save-dev
```

4. **Skapa `.env`-fil och fyll i databasuppgifter:**
```env
MONGO_URI= -hämtad från MongoDB Atlas-
PORT=3000
```

5. **Starta server:**

```bash
npm run start
```

6. API länk: [http://localhost:3000/api](http://localhost:3000/api) 

### Validering
- Alla fält ifyllda vid skapande och uppdatering
- Webbtjänsten returnerar tydliga felmeddelanden och statuskoder vid saknade fält eller andra fel så som:
```json
{
  "errors": {
    "location": {
      "name": "ValidatorError",
      "message": "Du måste ange ett startdatum",
      "properties": {
        "message": "Du måste ange ett startdatum",
        "type": "required",
        "path": "location"
      },
      "kind": "required",
      "path": "location"
    }
  },
  "_message": "Experience validation failed",
  "name": "ValidationError",
  "message": "Experience validation failed: location: Du måste ange ett startdatum"
}
```

## Testning
API:t kan testas med program som:
- Thunder Client (vsc extension)
- Postman
- Advanced REST Client

## Användning i frontend
API:t kan kopplas till ett simpelt formulär i en frontendapplikation som visar, lägger till, redigerar och tar bort arbetserfarenheter.    
Repo till frontend-applikation: 
```bash
git clone https://github.com/rare2400/Moment3.2-cv.git
```

## Skapad av
Skapad som en del av en skolupppgift   
Mittuniversitetet, Webbutvecklingsprogrammet    
Ramona Reinholdz   
2025-07-29
