const notifications = [
    {
        id: 1,
        type: "Placement",
        message: "Infosys hiring drive",
        isRead: false
    }
];

const getNotifications = (req, res) => {
    res.json(notifications);
};

const addNotification = (req, res) => {

    const newNotification = {
        id: notifications.length + 1,
        type: req.body.type,
        message: req.body.message,
        isRead: false
    };

    notifications.push(newNotification);

    res.json({
        message: "Notification Added"
    });
};

module.exports = {
    getNotifications,
    addNotification
};
