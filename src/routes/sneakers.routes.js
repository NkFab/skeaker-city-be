import { Router } from "express";
import SneakersController from "../controller/sneakers.controller";

const routes = Router();

routes.get("/sneakers", SneakersController.getAll);

export default routes;
