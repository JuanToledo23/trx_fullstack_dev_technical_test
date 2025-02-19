"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicles = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_service_1 = require("./services/database.service");
const vehicles_router_1 = require("./routes/vehicles.router");
const https_1 = require("firebase-functions/v1/https");
const options = {
  origin: "*",
};
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)(options));
const PORT = 5055;
(0, database_service_1.connectToDatabase)()
  .then(() => {
    app.use("/vehicles", vehicles_router_1.vehicleRouter);
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
exports.vehicles = (0, https_1.onRequest)(app);
//# sourceMappingURL=index.js.map
