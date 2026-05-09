const Notification = require("../models/Notification");

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
            .sort({ createdAt: -1 })
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

        const notification = new Notification({

            type: req.body.type,
            message: req.body.message

        });

        await notification.save();

        res.json({
            message: "Notification Added"
        });

    } catch (err) {

        res.status(500).json({
            message: "Error while saving notification"
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
