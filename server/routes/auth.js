import { createAuth, getAuths } from "../controllers/auth.js";
import router from "./index.js";

router.get("/auths", getAuths);
router.post("/auths", createAuth);
