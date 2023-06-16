# airbooking
*It is a test for vacancy in one company*

## Done
- All is working - done!
- Optimizations & refactoring - pending..

## How to start
1. in console of the Terminal : `git clone git@github.com:PhoenixBirdy/airbooking.git`
2. open IDE in working directory
3. in console of IDE: `npm install`
4. in console of IDE: `npm start`

## Assignment:

Your task is to create a web application for booking airline tickets using React. The application should simulate the functionality of ticket booking according to API data.
Dataset is like:
```
[
  {
    "id": 1,
    "from": "Prague",
    "to": "London",
    "departure": "2023-06-10T10:00:00",
    "arrival": "2023-06-10T12:00:00",
    "duration": "2h",
    "price": 150,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": false },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 2,
    "from": "London",
    "to": "Paris",
    "departure": "2023-06-10T14:00:00",
    "arrival": "2023-06-10T16:00:00",
    "duration": "2h",
    "price": 200,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 3,
    "from": "Paris",
    "to": "Rome",
    "departure": "2023-06-10T09:00:00",
    "arrival": "2023-06-10T11:00:00",
    "duration": "2h",
    "price": 180,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": false },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 4,
    "from": "Rome",
    "to": "Barcelona",
    "departure": "2023-06-10T13:00:00",
    "arrival": "2023-06-10T16:00:00",
    "duration": "3h",
    "price": 250,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 5,
    "from": "Barcelona",
    "to": "Berlin",
    "departure": "2023-06-10T11:00:00",
    "arrival": "2023-06-10T13:00:00",
    "duration": "2h",
    "price": 170,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": false }
    ]
  },
  {
    "id": 6,
    "from": "Berlin",
    "to": "Vienna",
    "departure": "2023-06-10T09:30:00",
    "arrival": "2023-06-10T11:30:00",
    "duration": "2h",
    "price": 190,
    "seats": [
      { "id": 1, "number": "A1", "available": false },
      { "id": 2, "number": "A2", "available": false },
      { "id": 3, "number": "B1", "available": false },
      { "id": 4, "number": "B2", "available": false }
    ]
  },
  {
    "id": 7,
    "from": "Vienna",
    "to": "Amsterdam",
    "departure": "2023-06-10T10:15:00",
    "arrival": "2023-06-10T12:15:00",
    "duration": "2h",
    "price": 180,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 8,
    "from": "Amsterdam",
    "to": "Madrid",
    "departure": "2023-06-10T13:30:00",
    "arrival": "2023-06-10T16:30:00",
    "duration": "3h",
    "price": 250,
    "seats": [
      { "id": 1, "number": "A1", "available": false },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 9,
    "from": "Madrid",
    "to": "Athens",
    "departure": "2023-06-10T11:30:00",
    "arrival": "2023-06-10T14:30:00",
    "duration": "3h",
    "price": 280,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 10,
    "from": "Athens",
    "to": "Vienna",
    "departure": "2023-06-11T09:00:00",
    "arrival": "2023-06-11T12:00:00",
    "duration": "3h",
    "price": 220,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 11,
    "from": "Vienna",
    "to": "Lisbon",
    "departure": "2023-06-11T14:30:00",
    "arrival": "2023-06-11T18:30:00",
    "duration": "4h",
    "price": 300,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": false },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": false }
    ]
  },
  {
    "id": 12,
    "from": "Lisbon",
    "to": "Vienna",
    "departure": "2023-06-11T23:00:00",
    "arrival": "2023-06-12T02:00:00",
    "duration": "3h",
    "price": 190,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 13,
    "from": "Prague",
    "to": "London",
    "departure": "2023-06-11T17:00:00",
    "arrival": "2023-06-11T19:00:00",
    "duration": "2h",
    "price": 150,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true },
    ]
  },
  {
    "id": 14,
    "from": "London",
    "to": "Paris",
    "departure": "2023-06-11T14:00:00",
    "arrival": "2023-06-11T16:00:00",
    "duration": "2h",
    "price": 200,
    "seats": [
      { "id": 1, "number": "A1", "available": false },
      { "id": 2, "number": "A2", "available": false },
      { "id": 3, "number": "B1", "available": false },
      { "id": 4, "number": "B2", "available": false }
    ]
  },
  {
    "id": 15,
    "from": "Paris",
    "to": "Rome",
    "departure": "2023-06-11T09:00:00",
    "arrival": "2023-06-11T11:00:00",
    "duration": "2h",
    "price": 180,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": false },
      { "id": 4, "number": "B2", "available": true }
    ]
  },
  {
    "id": 16,
    "from": "Rome",
    "to": "Barcelona",
    "departure": "2023-06-11T06:00:00",
    "arrival": "2023-06-11T09:00:00",
    "duration": "3h",
    "price": 250,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": false },
      { "id": 4, "number": "B2", "available": false }
    ]
  },
  {
    "id": 17,
    "from": "Barcelona",
    "to": "Berlin",
    "departure": "2023-06-11T01:00:00",
    "arrival": "2023-06-11T03:00:00",
    "duration": "2h",
    "price": 370,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": false },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": false }
    ]
  },
  {
    "id": 18,
    "from": "Berlin",
    "to": "Vienna",
    "departure": "2023-06-11T09:30:00",
    "arrival": "2023-06-11T11:30:00",
    "duration": "2h",
    "price": 220,
    "seats": [
      { "id": 1, "number": "A1", "available": true },
      { "id": 2, "number": "A2", "available": true },
      { "id": 3, "number": "B1", "available": true },
      { "id": 4, "number": "B2", "available": true }
    ]
  }
]
```

## Application requirements:

- **Project Structure:** Create a proper project structure in React and organise components, services and styles according to best practices.
- **Load flights:** Load the mock data and hold its state in the React application. Use a suitable state management tool (e.g. React Context, Redux...) to store and update the mock flights and booking data. State changes should be reflected in the UI.
- **Search for available flights:** Implement a flight search component. Users should be able to specify origin and destination airports, departure date and other relevant parameters and show flights matching the filtering in a list.
- **Flight booking:** After the user selects a flight, allow the user to select seats and complete the booking. The user should be able to select the desired seats and enter passenger details. After simulated booking, display confirmation and information about the booked flight.
- **Data validation:** Check if the entered data is valid (e.g. date validation etc...). Show the user the corresponding error messages in case of invalid data.

## Bonus:

- **Error handling:** Simulate various error conditions such as data loading errors, invalid server responses, etc. Display appropriate error messages to the user.

> *Additional info:*
>
> *Styling is not subject to evaluation, however, we appreciate the use of Material UI / Bootstrap / ... 
> You will get extra points if you submit the entire solution dockerized.* 

**However, we will primarily evaluate your ability to work with React, manage states, work with data, and follow development best practices.**
