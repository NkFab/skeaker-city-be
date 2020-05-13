import { Router } from "express";
import SneakersController from "../controller/sneakers.controller";

const routes = Router();

routes.get("/sneakers", SneakersController.getAll);
routes.get("/sneakers/:name", SneakersController.getOne);

export default routes;
