const express = require("express");
const YAML = require("yaml");
const swaggerUi = require("swagger-ui-express");
const app = express();

const PORT = 3001;

const swaggerDocument = YAML.parse(
  require("fs").readFileSync("./swagger.yaml", "utf8")
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({message: "Hello World!"});
});

app.get("/blog/:numero_blog", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.json({
    post: req.params.numero_blog,
    message: "Hello World!",
    query: req.query,
  });
});

app.get("/add", (req, res) => {
  console.log(req.query);
  res.json({
    message: "Hello World!",
    query: req.query,
    sum: Number(req.query.a) + Number(req.query.b),
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
