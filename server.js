const dotenv = require('dotenv').config();
const express = require('express');
const orm = require('./config/orm');
const htmlRoutes = require('./routes/html-routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/", htmlRoutes);

orm.selectAll("projects", (result) => {
    console.log(result)
})




app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT} and process is PID ${process.pid}`);
});