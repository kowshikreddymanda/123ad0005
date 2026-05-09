const express = require("express");

const {
    getNotifications,
    addNotification,
    markAsRead
} = require("../controllers/notificationController");

const router = express.Router();

router.get("/", getNotifications);

router.post("/", addNotification);

router.put("/:id", markAsRead);

module.exports = router;
