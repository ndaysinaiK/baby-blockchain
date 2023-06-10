# Let's build the blockchain's core engine from scratch!


![image](https://user-images.githubusercontent.com/74330893/152830124-38b35990-8839-474f-a5c8-eb4e0b687984.png)


## Website 

https://open-blockchain-project.com/ 

## Intro

This is an opensource blockchain prototype project that aims to solve some blockchain issues using simple methods, feel free to contribute 😊


## Folder Structure

```sh
baby-blockchain
│
├── backend
│   ├── AddNet          - TODO: add decentralization and fault tolerance
│   ├── AddPersistence  - TODO: add data persistance
│   ├── AddPoS          - TODO: Proof of Stake concensus algorithm
│   └── Simple          - First and Simple implementation (No data persistence: Data disapears after reload) built in Go
└── frontend            - Frontend built in React (js)
```


## Prerequisites

 - go installed
 - nodejs installed
 
## Run it

### Backend

```sh
cd backend/Simple
cp dotenv.tpl .env      # create a .env file from template
go build                # build application
./blockchain            # run the application on the port specified in .env (defaults to 3002 - may shut down any app running on that port)
```

Go to `http://localhost:3002/api` to see your api running.

### Frontend

```sh
cd frontend
npm install
npm start               # this will open the reactjs app in your default browser (localhost:3000 by default).
```

Go to http://localhost:3000 to see your frontend running.
Note: Backend url is specified in `Utils/Apis.js`

### This project is an improvement of this article https://medium.com/swlh/is-it-hard-to-build-a-blockchain-from-scratch-2662e9b873b7

You can read it for basic understanding.

## Any contribution will be appreciated

Fork the repo, pull requests to contribute to this project.
