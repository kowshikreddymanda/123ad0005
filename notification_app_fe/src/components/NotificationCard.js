function NotificationCard({ item }) {

    return (

        <div className="card">

            <h3>{item.Type}</h3>

            <p>{item.Message}</p>

            <span>{item.Timestamp}</span>

        </div>

    );
}

export default NotificationCard;
