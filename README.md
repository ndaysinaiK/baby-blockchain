# Let's build the blockchain's core engine from scratch!


![image](https://user-images.githubusercontent.com/74330893/152830124-38b35990-8839-474f-a5c8-eb4e0b687984.png)


## Website 

https://open-blockchain-project.com/ 

## Intro

This is an opensource blockchain prototype project that aims to solve some blockchain issues using simple methods, feel free to contribute 😊


## Folder Structure

-baby-blockchain

  - baby-blockchain
      - AddNet : add decentralization and fault tolerance 
      - AddPersistence : data persistence 
      - AddPoS : Proof of Stake concensus algorithm
      - Simple : First and Simple implementation (No data persistence: Data disapears after reload)

  - frontend : Reactjs frontend App

## Prerequisites

- go installed
- nodejs installed
 
## Run it

- git clone https://github.com/ndaysinaiK/baby-blockchain
- cd baby-blockchain/frontend
- npm i
- cd baby-blockchain/baby-blockchain/Simple : for the first implementation
- go build
- run 
- run ./blockchain : this will run the app on port 3002 ( may shut down any app running on that port)
- open the frontend folder, search for https://bch-simple.herokuapp.com in Utils/Apis.js and replace it with http://localhost:3002
- go to http://localhost:3002/api to see your api running.
- cd baby-blockchain/frontend 
- npm start : this will open the reactjs app in your local browser. Test and improve it.


### This project is an improvement of this article https://medium.com/swlh/is-it-hard-to-build-a-blockchain-from-scratch-2662e9b873b7

You can read it for basic understanding.


## Any contribution will be appreciated

Fork the repo, pull requests to contribute to this project.

## support with coffee

https://www.buymeacoffee.com/nksinai ☕












