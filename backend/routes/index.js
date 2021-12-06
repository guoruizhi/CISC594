import express from "express";
import user from "../controller/user";

const route = express();

route.use("/user", user);
export default route;
