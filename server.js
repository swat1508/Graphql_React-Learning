const express = require('express');
const app = express();
const graphqlHttp = require('express-graphql');
const PORT = process.env.PORT || 8085;
const cors = require('cors');

const schema=require('./schema');

//Allow Cross Origin
app.use(cors());

app.use('/graphql', graphqlHttp({
    schema,
    graphiql:true
})
);

app.listen(PORT, () => {
    console.log(`Server started on port :  ${PORT}`)
})