package models

// Author ::: author models
type Author struct {
	ID   int 	`json:"id"`
	Name string `json:"name"`
}

// Book ::: book models
type Book struct {
	ID     int 		`json:"id"`
	Name   string 	`json:"name"`
	Slug   string 	`json:"slug"`
	Author Author 	`json:"author"`
	Isbn   string 	`json:"isbn"`
	Price  float32 	`json:"price"`
	Stock  int 		`json:"stock"`
}
