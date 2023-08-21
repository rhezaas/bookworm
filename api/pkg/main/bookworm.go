package main

import (
	"os"
	"fmt"

	"bookworm-api/pkg/main/applications"
)

func main() {
	// run server
	applications.Server.Run(fmt.Sprintf(":%s", os.Getenv("API_PORT")))
}
