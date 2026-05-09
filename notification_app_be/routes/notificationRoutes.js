const express = require("express");

const {
    getNotifications,
    addNotification
} = require("../controllers/notificationController");

const router = express.Router();

router.get("/", getNotifications);

router.post("/", addNotification);

module.exports = router;
