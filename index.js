const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.status(200).send('Hello World! This is Xavier\'s Branch');
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});