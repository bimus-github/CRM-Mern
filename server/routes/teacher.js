import { getTeacher, createTeacher } from "../controllers/teacher.js";
import router from "./index.js";

router.get("/teacher", getTeacher);
router.post("/teacher", createTeacher);
