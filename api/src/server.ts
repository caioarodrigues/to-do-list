import app from "./app";
import config from "./config";

const { port } = config;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});