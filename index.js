const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.resolve(__dirname, "public")))

app.listen(9091, () => {
	console.log("success")
})