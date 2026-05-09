const Notification = require("../models/Notification");

const getNotifications = async (req, res) => {

    try {

        const data = await Notification.find().sort({
            createdAt: -1
        });

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
            message: "Notification Saved"
        });

    } catch (err) {

        res.status(500).json({
            message: "Error while saving notification"
        });

    }
};

module.exports = {
    getNotifications,
    addNotification
};
