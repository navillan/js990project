import { Router } from "express";
import { addGuest, deleteGuest, getGuest, updateGuest } from "../guestEditors/guestEdit.js";
import { getAdmin } from "../guestEditors/admin.js"

const projectRouter = Router();

projectRouter.post("/admin", getAdmin);
projectRouter.get("/", getGuest);
projectRouter.post("/", addGuest);
projectRouter.put("/:id", updateGuest);
projectRouter.delete("/:id", deleteGuest);

export default projectRouter;