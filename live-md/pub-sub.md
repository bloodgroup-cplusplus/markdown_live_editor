Pub-Sub Pattern: Decoupled Communication at Scale (One Shout, Many Listeners)

🎯 Challenge 1: The Breaking News Broadcast Problem
Imagine this scenario: A major event happens - your company just launched a new product. Now you need to notify:

Email service (send announcement emails)
SMS service (send text notifications)
Push notification service (send mobile alerts)
Analytics service (track the event)
Data warehouse (store for reporting)
Social media service (post on Twitter/Facebook)
Logging service (record the event)

Traditional approach: Your code calls each service one by one:
