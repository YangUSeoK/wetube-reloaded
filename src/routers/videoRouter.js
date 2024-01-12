import express from "express";
import { 
    watch,
    getEdit, 
    postEdit,
    getUpload, 
    postUpload,
    deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
//videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit); // 이렇게 써도 같음


export default videoRouter;