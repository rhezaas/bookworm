package book

import (
	"context"
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

	DB.RunInTx(ctx, &sql.TxOptions{}, func(ctx context.Context, tx bun.Tx) error {
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
}
