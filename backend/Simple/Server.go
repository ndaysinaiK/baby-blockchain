package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"sync"
	"time"

	"github.com/davecgh/go-spew/spew"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

var mutex = &sync.Mutex{}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal(err)
	}

	go func() {
		t := time.Now()
		genesisBlock := Block{}
		genesisBlock = Block{0, t.String(), Transactions{"Baby Genesis ", "Sinai", 20000000000000}, calculateHash(genesisBlock), ""}
		spew.Dump(genesisBlock)

		mutex.Lock()
		Blockchain = append(Blockchain, genesisBlock)
		mutex.Unlock()
	}()

	port := os.Getenv("PORT")

	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/api/", HomeLink)
	router.HandleFunc("/api/getblockchain", handleGetBlockchain).Methods("GET")
	router.HandleFunc("/api/sendtransaction", handleWriteBlock).Methods("POST")

	headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"})
	origins := handlers.AllowedOrigins([]string{"*"})

	fmt.Println("now serving on ", port)

	log.Fatal(http.ListenAndServe(":"+port, handlers.CORS(headers, methods, origins)(router)))

}
