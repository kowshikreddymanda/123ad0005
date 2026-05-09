const Notification = require("../models/Notification");

const saveNotification = async (type, message) => {
    let priorityValue = 1;
    if (type === "Placement") {
        priorityValue = 3;
    } else if (type === "Result") {
        priorityValue = 2;
    }
    const newNotification = new Notification({
        type: type,
        message: message,
        priority: priorityValue
    });
    await newNotification.save();
    return newNotification;
};

module.exports = {
    saveNotification
};
