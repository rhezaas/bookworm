package book

import (
	"context"
	"strconv"
	"database/sql"

	"github.com/gin-gonic/gin"
	"github.com/uptrace/bun"

	"bookworm-api/pkg/main/domains/book/repositories"
	"bookworm-api/pkg/main/domains/book/service"
	"bookworm-api/pkg/main/utils"
	. "bookworm-api/pkg/main/infrastructures"
)

func GetAuthors(c *gin.Context) {
	ctx := context.Background()
	svc := service.NewBookService(repositories.NewQuery())

	err := DB.RunInTx(ctx, &sql.TxOptions{}, func(ctx context.Context, tx bun.Tx) error {
		authors, err := svc.GetAuthors(ctx, tx)

		if err != nil {
			if DBEmptyResult(err) {
				utils.SendSuccess(c, 200, []gin.H{})
				return err
			}

			utils.SendError(c, 400, err.Error())
			return err
		}

		utils.SendSuccess(c, 200, authors)
		return nil
	})

	if err != nil {
		utils.SendError(c, 400, err.Error())
	}
}

func GetBooks(c *gin.Context) {
	ctx := context.Background()
	svc := service.NewBookService(repositories.NewQuery())

	err := DB.RunInTx(ctx, &sql.TxOptions{}, func(ctx context.Context, tx bun.Tx) error {
		books, err := svc.GetBooks(ctx, tx)

		if err != nil {
			if DBEmptyResult(err) {
				utils.SendSuccess(c, 200, []gin.H{})
				return err
			}

			utils.SendError(c, 400, err.Error())
			return err
		}

		utils.SendSuccess(c, 200, books)
		return nil
	})

	if err != nil {
		utils.SendError(c, 400, err.Error())
	}
}

func GetAuthorByID(c *gin.Context) {
	ctx := context.Background()
	svc := service.NewBookService(repositories.NewQuery())

	err := DB.RunInTx(ctx, &sql.TxOptions{}, func(ctx context.Context, tx bun.Tx) error {
		ID, err := strconv.Atoi(c.Param("ID"))
		author, err := svc.GetAuthorByID(ctx, tx, ID)

		if err != nil {
			if DBEmptyResult(err) {
				utils.SendSuccess(c, 200, gin.H{})
				return err
			}

			utils.SendError(c, 400, err.Error())
			return err
		}

		utils.SendSuccess(c, 200, author)
		return nil
	})

	if err != nil {
		utils.SendError(c, 400, err.Error())
	}
}

func GetBookByID(c *gin.Context) {
	ctx := context.Background()
	svc := service.NewBookService(repositories.NewQuery())

	err := DB.RunInTx(ctx, &sql.TxOptions{}, func(ctx context.Context, tx bun.Tx) error {
		ID, err := strconv.Atoi(c.Param("ID"))
		book, err := svc.GetBookByID(ctx, tx, ID)

		if err != nil {
			if DBEmptyResult(err) {
				utils.SendSuccess(c, 200, gin.H{})
				return err
			}

			utils.SendError(c, 400, err.Error())
			return err
		}

		utils.SendSuccess(c, 200, book)
		return nil
	})

	if err != nil {
		utils.SendError(c, 400, err.Error())
	}
}