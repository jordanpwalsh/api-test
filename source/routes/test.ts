import express from 'express';
import controller from '../controllers/test';

const router = express.Router();

router.get("/get", controller.getTest);
router.post("/post", controller.postTest);

export = router
