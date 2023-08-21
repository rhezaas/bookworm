package models

import (
	"context"

	"github.com/uptrace/bun"
)

type IBookQuery interface {
	GetAuthors(ctx context.Context, trx bun.Tx) (*[]Author, error)
	GetBooks(ctx context.Context, trx bun.Tx) (*[]Book, error)
}
