# Stage 3
## Given Query
```sql
SELECT * FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt ASC;
```
---
## Problems In This Query

1. `SELECT *` fetches all columns even if they are not required.

2. No indexing is used on `studentID`, `isRead`, and `createdAt`.

3. Sorting large records using `ORDER BY` becomes slow.

4. `ASC` order shows old notifications first which is not useful for users.

5. Full table scan may happen when the table contains large data.
---
## Optimized Query
```sql
SELECT id, type, message, createdAt
FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt DESC
LIMIT 20;
```
---
## Suggested Index
```sql
CREATE INDEX idx_notifications
ON notifications(studentID, isRead, createdAt DESC);
```
---
## Why This Query Is Better

* Fetches only required columns
* Improves filtering performance
* Reduces database load
* Faster sorting
* Better scalability
* Supports pagination

---

## Query To Find Students With Unread Placement Notifications

```sql
SELECT DISTINCT studentID
FROM notifications
WHERE isRead = false
AND type = 'Placement';
```

---

## Benefits Of This Query

* Finds students with unread placement notifications
* Removes duplicate student IDs
* Faster retrieval with indexing
* Useful for sending placement alerts
