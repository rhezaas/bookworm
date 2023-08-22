package service

import (
	"context"

	"github.com/uptrace/bun"

	"bookworm-api/pkg/main/domains/book/models"
)

type BookService struct {
	query models.IBookQuery
}

func NewBookService(query models.IBookQuery) BookService {
	return BookService{
		query: query,
	}
}

func (service BookService) GetAuthors(ctx context.Context, trx bun.Tx) (*[]models.Author, error) {
	return service.query.GetAuthors(ctx, trx)
}

func (service BookService) GetBooks(ctx context.Context, trx bun.Tx) (*[]models.Book, error) {
	return service.query.GetBooks(ctx, trx)
}

func (service BookService) GetAuthorByID(ctx context.Context, trx bun.Tx, ID int) (*models.Author, error) {
	return service.query.GetAuthorByID(ctx, trx, ID)
}

func (service BookService) GetBookByID(ctx context.Context, trx bun.Tx, ID int) (*models.Book, error) {
	return service.query.GetBookByID(ctx, trx, ID)
}