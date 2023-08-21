package applications

import (
	"github.com/gin-gonic/gin"

	"bookworm-api/pkg/main/domains/book"
)

// Server :::
var (
	Server = gin.New()
	_      = Server.SetTrustedProxies([]string{"localhost"})
	_      = Server.Use(parseBody)
	_      = Server.Use(cors)
)

func init() {
	// Initial Routesm
	Server.GET("/", func(ctx *gin.Context) { ctx.JSON(200, gin.H{"message": "Backend is ready"}) })
	Server.GET("/author", book.GetAuthors)
}
