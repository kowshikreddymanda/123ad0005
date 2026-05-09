const Notification = require("../models/Notification");
const sendLog = require("../../logging_middleware/logger");
const {
    saveNotification
} = require("../services/notificationService");

const getNotifications = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        let filterData = {};

        if (req.query.isRead) {

            filterData.isRead = req.query.isRead === "true";

        }

        const data = await Notification.find(filterData)
            .sort({
                priority: -1,
                createdAt: -1
            })
            .skip(skip)
            .limit(limit);

        res.json(data);

    } catch (err) {

        res.status(500).json({
            message: "Error while fetching notifications"
        });

    }
};

const addNotification = async (req, res) => {

    try {

        const type = req.body.type;

        const message = req.body.message;

        await saveNotification(type, message);

        await sendLog(
            "backend",
            "info",
            "service",
            "Notification processed successfully"
        );

        res.json({
            message: "Notification Added"
        });

    } catch (err) {

        await sendLog(
            "backend",
            "error",
            "service",
            "Failed to process notification"
        );

        res.status(500).json({
            message: "Server Error"
        });

    }
};

const markAsRead = async (req, res) => {

    try {

        await Notification.findByIdAndUpdate(
            req.params.id,
            {
                isRead: true
            }
        );

        res.json({
            message: "Notification marked as read"
        });

    } catch (err) {

        res.status(500).json({
            message: "Error while updating notification"
        });

    }
};

module.exports = {
    getNotifications,
    addNotification,
    markAsRead
};
