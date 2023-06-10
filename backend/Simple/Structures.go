package main

type Block struct {
	Index         int          `json:"index"`
	Timestamp     string       `json:"timestamp"`
	Transanctions Transactions `json:"transactions"`
	Hash          string       `json:"hash"`
	PrevHash      string       `json:"prevhash"`
}

type Transactions struct {
	From   string `json:"from"`
	To     string `json:"to"`
	Amount int    `json:"amount"`
}

var Blockchain []Block
