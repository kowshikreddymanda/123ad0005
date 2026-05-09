const axios = require("axios");

const sendLog = async (
    stack,
    level,
    packageName,
    message
) => {

    try {

        await axios.post(
            "http://4.224.186.213/evaluation-service/logs",

            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },

            {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIxMjNhZDAwMDVAaWlpdGsuYWMuaW4iLCJleHAiOjE3NzgzMDQyOTYsImlhdCI6MTc3ODMwMzM5NiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNkYjIwZjI4LWFjMGItNDQ0ZC04MTIxLTZiYWYyOTQ3OTRjYSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Imtvd3NoaWsgcmVkZHkiLCJzdWIiOiI2YmU0NmJiNi1jMWZlLTQwOWYtOGYxNi1lYTI5NmZhMGIyYWQifSwiZW1haWwiOiIxMjNhZDAwMDVAaWlpdGsuYWMuaW4iLCJuYW1lIjoia293c2hpayByZWRkeSIsInJvbGxObyI6IjEyM2FkMDAwNSIsImFjY2Vzc0NvZGUiOiJ1WnlTQVQiLCJjbGllbnRJRCI6IjZiZTQ2YmI2LWMxZmUtNDA5Zi04ZjE2LWVhMjk2ZmEwYjJhZCIsImNsaWVudFNlY3JldCI6IldCeXFmbkV3cGVWR3hKVmUifQ.hWi0mNO6c9rm9Byk2B7aWxZICckRyuCK679zWwceoVE"
                }
            }
        );

    } catch (err) {

        console.log("Log API Error");

    }
};

module.exports = sendLog;
