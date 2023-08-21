package utils

import (
	"github.com/gin-gonic/gin"
)

// SendSuccess ::: send success respond
func SendSuccess[T any](ctx *gin.Context, code int, msg T) {
	ctx.JSON(code, gin.H{
		"message": msg,
	})
}

// SendError ::: send error respond
func SendError(ctx *gin.Context, code int, msg string) {
	ctx.AbortWithStatusJSON(code, gin.H{
		"errors": msg,
	})
}
