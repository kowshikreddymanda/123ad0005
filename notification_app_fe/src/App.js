import { useEffect, useState } from "react";

import axios from "axios";

import NotificationCard from "./components/NotificationCard";

import "./App.css";

function App() {

    const [notifications, setNotifications] = useState([]);

    const [type, setType] = useState("");

    useEffect(() => {

        fetchNotifications();

    }, [type]);

    const fetchNotifications = async () => {

        try {

            let url =
                "http://4.224.186.213/evaluation-service/notifications?limit=10&page=1";

            if (type !== "") {

                url += `&notification_type=${type}`;

            }

            const response = await axios.get(url, {

                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIxMjNhZDAwMDVAaWlpdGsuYWMuaW4iLCJleHAiOjE3NzgzMDQyOTYsImlhdCI6MTc3ODMwMzM5NiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNkYjIwZjI4LWFjMGItNDQ0ZC04MTIxLTZiYWYyOTQ3OTRjYSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Imtvd3NoaWsgcmVkZHkiLCJzdWIiOiI2YmU0NmJiNi1jMWZlLTQwOWYtOGYxNi1lYTI5NmZhMGIyYWQifSwiZW1haWwiOiIxMjNhZDAwMDVAaWlpdGsuYWMuaW4iLCJuYW1lIjoia293c2hpayByZWRkeSIsInJvbGxObyI6IjEyM2FkMDAwNSIsImFjY2Vzc0NvZGUiOiJ1WnlTQVQiLCJjbGllbnRJRCI6IjZiZTQ2YmI2LWMxZmUtNDA5Zi04ZjE2LWVhMjk2ZmEwYjJhZCIsImNsaWVudFNlY3JldCI6IldCeXFmbkV3cGVWR3hKVmUifQ.hWi0mNO6c9rm9Byk2B7aWxZICckRyuCK679zWwceoVE"
                }

            });

            setNotifications(response.data.notifications);

        } catch (err) {

            console.log(err);

        }
    };

    return (

        <div className="main-container">

            <h1>Student Notification Center</h1>

            <div className="filter-box">

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >

                    <option value="">All</option>

                    <option value="Event">Event</option>

                    <option value="Result">Result</option>

                    <option value="Placement">Placement</option>

                </select>

            </div>

            <div className="notification-container">

                {notifications.map((item) => {

                    return (
                        <NotificationCard
                            key={item.ID}
                            item={item}
                        />
                    );

                })}

            </div>

        </div>

    );
}

export default App;
