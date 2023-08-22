package models

import (
	"context"

	"github.com/uptrace/bun"
)

type IBookQuery interface {
	// listing
	GetAuthors(ctx context.Context, trx bun.Tx) (*[]Author, error)
	GetBooks(ctx context.Context, trx bun.Tx) (*[]Book, error)

	// get one
	GetAuthorByID(ctx context.Context, trx bun.Tx, ID int) (*Author, error)
	GetBookByID(ctx context.Context, trx bun.Tx, ID int) (*Book, error)
}
