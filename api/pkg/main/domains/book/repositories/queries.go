package repositories

import (
	"context"

	"bookworm-api/pkg/main/domains/book/models"
	"github.com/uptrace/bun"
)

type BookQuery struct {}

func NewQuery() models.IBookQuery {
	return BookQuery{}
}

func (query BookQuery) GetAuthors(ctx context.Context, trx bun.Tx) (*[]models.Author, error) {
	var authors []models.Author

	err := trx.NewSelect().
		ColumnExpr(`
			author.id,
			author.name`).
		TableExpr(`product.author author`).
		OrderExpr(`author.name`).
		Scan(ctx, &authors)

	return &authors, err
}

func (query BookQuery) GetBooks(ctx context.Context, trx bun.Tx) (*[]models.Book, error) {
	var books []models.Book

	err := trx.NewSelect().
		ColumnExpr(`
			book.id,
			book.name,
			book.slug,
			book.isbn,
			book.price,
			book.stock,
			jsonb_build_object(
				'id', author.id,
				'name', author.name
			) author`).
		TableExpr(`product.book book`).
		Join(`LEFT JOIN product.author author ON author.id = book.author_id`).
		Scan(ctx, &books)

	return &books, err
}

func (query BookQuery) GetAuthorByID(ctx context.Context, trx bun.Tx, ID int) (*models.Author, error) {
	var author models.Author

	err := trx.NewSelect().
		ColumnExpr(`
			author.id,
			author.name`).
		TableExpr(`product.author author`).
		Where(`author.id = ?`, ID).
		Scan(ctx, &author)

	return &author, err
}

func (query BookQuery) GetBookByID(ctx context.Context, trx bun.Tx, ID int) (*models.Book, error) {
	var book models.Book

	err := trx.NewSelect().
		ColumnExpr(`
			book.id,
			book.name,
			book.slug,
			book.isbn,
			book.price,
			book.stock,
			jsonb_build_object(
				'id', author.id,
				'name', author.name
			) author`).
		TableExpr(`product.book book`).
		Join(`LEFT JOIN product.author author ON author.id = book.author_id`).
		Where(`book.id = ?`, ID).
		Scan(ctx, &book)

	return &book, err
}