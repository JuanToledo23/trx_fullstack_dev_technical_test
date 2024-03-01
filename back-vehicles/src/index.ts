import express from "express";
import { connectToDatabase } from "./services/database.service";
import { vehicleRouter } from "./routes/vehicles.router";

const app = express();
app.use(express.json());

const PORT = 3000;

connectToDatabase()
  .then(() => {
    app.use("/vehicles", vehicleRouter);

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

// app.get('/ping', (_req, res) => {
//   console.log('someone pnged here!!')
//   res.send('pong')
// })

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })
