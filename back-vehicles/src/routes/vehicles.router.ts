import express, { Request, Response } from "express";
import { collections } from "../services/database.service";
import { paginate } from "../utils/pagination";
import { ObjectId } from "mongodb";
import { Vehicle } from "../types/vehicles";
import { Pagination } from "../types/utils";

export const vehicleRouter = express.Router();

vehicleRouter.use(express.json());

vehicleRouter.get("/", async (req: Request, res: Response) => {
  const pages: number = Number(req.query.page ? req.query.page : 1);
  try {
    let vehicles: Array<Vehicle> | Pagination;
    if (req.query.page)
      vehicles = paginate(
        (await collections.vehicles
          ?.find({})
          .toArray()) as unknown as Vehicle[],
        pages,
      ) as Pagination;
    else
      vehicles = (await collections.vehicles
        ?.find({})
        .toArray()) as unknown as Vehicle[];
    res.status(200).send(vehicles);
  } catch (error) {
    res.status(500).send(error);
  }
});

vehicleRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const vehicle = (await collections.vehicles?.findOne(
      query,
    )) as unknown as Vehicle;

    if (vehicle) {
      res.status(200).send(vehicle);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
});

vehicleRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newVehicle = req.body as Vehicle;
    const result = await collections.vehicles?.insertOne(newVehicle);

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
});

vehicleRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const updatedVehicle: Vehicle = req.body as Vehicle;
    const query = { _id: new ObjectId(id) };

    const result = await collections.vehicles?.updateOne(query, {
      $set: updatedVehicle,
    });

    result
      ? res.status(200).send(`Successfully updated vehicle with id ${id}`)
      : res.status(304).send(`Vehicle with id: ${id} not updated`);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

vehicleRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.vehicles?.deleteOne(query);

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
});
