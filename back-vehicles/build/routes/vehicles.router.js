"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleRouter = void 0;
const express_1 = __importDefault(require("express"));
const database_service_1 = require("../services/database.service");
const pagination_1 = require("../utils/pagination");
const mongodb_1 = require("mongodb");
const location_1 = require("../utils/location");
exports.vehicleRouter = express_1.default.Router();
exports.vehicleRouter.use(express_1.default.json());
exports.vehicleRouter.get("/", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const pages = Number(req.query.page ? req.query.page : 1);
    const perPage = Number(req.query.perPage ? req.query.perPage : 10);
    try {
      let vehicles;
      if (req.query.search) {
        vehicles = (0, pagination_1.paginate)(
          ((_b = yield (_a = database_service_1.collections.vehicles) ===
            null || _a === void 0
            ? void 0
            : _a.find({}).toArray()) === null || _b === void 0
            ? void 0
            : _b.reverse().filter((vehicle) => {
                return (
                  vehicle.plate.toLowerCase().includes(req.query.search) ||
                  vehicle.economicNumber
                    .toLowerCase()
                    .includes(req.query.search) ||
                  String(vehicle.seats)
                    .toLowerCase()
                    .includes(req.query.search) ||
                  vehicle.insurance.toLowerCase().includes(req.query.search) ||
                  vehicle.insuranceNumber
                    .toLowerCase()
                    .includes(req.query.search) ||
                  vehicle.brand.toLowerCase().includes(req.query.search) ||
                  vehicle.model.toLowerCase().includes(req.query.search) ||
                  String(vehicle.year)
                    .toLowerCase()
                    .includes(req.query.search) ||
                  vehicle.color.toLowerCase().includes(req.query.search)
                );
              })
          ).map((vehicle) =>
            Object.assign(Object.assign({}, vehicle), {
              position: (0, location_1.getRandomLocation)(),
            }),
          ),
          pages,
          perPage,
        );
      } else {
        if (req.query.page) {
          vehicles = (0, pagination_1.paginate)(
            ((_d = yield (_c = database_service_1.collections.vehicles) ===
              null || _c === void 0
              ? void 0
              : _c.find({}).toArray()) === null || _d === void 0
              ? void 0
              : _d.reverse()
            ).map((vehicle) =>
              Object.assign(Object.assign({}, vehicle), {
                position: (0, location_1.getRandomLocation)(),
              }),
            ),
            pages,
            perPage,
          );
        } else {
          vehicles = (yield (_e = database_service_1.collections.vehicles) ===
            null || _e === void 0
            ? void 0
            : _e.find({}).toArray()).map((vehicle) =>
            Object.assign(Object.assign({}, vehicle), {
              position: (0, location_1.getRandomLocation)(),
            }),
          );
        }
      }
      res.status(200).send(vehicles);
    } catch (error) {
      res.status(500).send(error);
    }
  }),
);
exports.vehicleRouter.get("/:id", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _f, _g;
    const id =
      (_f = req === null || req === void 0 ? void 0 : req.params) === null ||
      _f === void 0
        ? void 0
        : _f.id;
    try {
      const query = { _id: new mongodb_1.ObjectId(id) };
      const vehicle = yield (_g = database_service_1.collections.vehicles) ===
        null || _g === void 0
        ? void 0
        : _g.findOne(query);
      if (vehicle) {
        res.status(200).send(vehicle);
      }
    } catch (error) {
      res
        .status(404)
        .send(`Unable to find matching document with id: ${req.params.id}`);
    }
  }),
);
exports.vehicleRouter.post("/", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _h;
    try {
      const newVehicle = req.body;
      const result = yield (_h = database_service_1.collections.vehicles) ===
        null || _h === void 0
        ? void 0
        : _h.insertOne(newVehicle);
      result
        ? res
            .status(201)
            .send(
              `Successfully created a new vehicle with id ${result.insertedId}`,
            )
        : res.status(500).send("Failed to create a new vehicle.");
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  }),
);
exports.vehicleRouter.put("/:id", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _j, _k;
    const id =
      (_j = req === null || req === void 0 ? void 0 : req.params) === null ||
      _j === void 0
        ? void 0
        : _j.id;
    try {
      const updatedVehicle = req.body;
      const query = { _id: new mongodb_1.ObjectId(id) };
      const result = yield (_k = database_service_1.collections.vehicles) ===
        null || _k === void 0
        ? void 0
        : _k.updateOne(query, {
            $set: updatedVehicle,
          });
      result
        ? res.status(200).send(`Successfully updated vehicle with id ${id}`)
        : res.status(304).send(`Vehicle with id: ${id} not updated`);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  }),
);
exports.vehicleRouter.delete("/:id", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _l, _m;
    const id =
      (_l = req === null || req === void 0 ? void 0 : req.params) === null ||
      _l === void 0
        ? void 0
        : _l.id;
    try {
      const query = { _id: new mongodb_1.ObjectId(id) };
      const result = yield (_m = database_service_1.collections.vehicles) ===
        null || _m === void 0
        ? void 0
        : _m.deleteOne(query);
      if (result && result.deletedCount) {
        res.status(202).send(`Successfully removed vehicle with id ${id}`);
      } else if (!result) {
        res.status(400).send(`Failed to remove vehicle with id ${id}`);
      } else if (!result.deletedCount) {
        res.status(404).send(`Vehicle with id ${id} does not exist`);
      }
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  }),
);
