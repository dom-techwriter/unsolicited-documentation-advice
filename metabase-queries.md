# Some metabase queries that I can use


Find all requests made via postman

```sql
select
-- date_truc is a function that lets us truncate a timestamp to something we'd like
-- date_trunc('day',timestamp) as day,
-- user_email,
http_method,
high_level_resource,
count(*) as n_events
from api_events
where event_name = 'request_finished'
and user_agent like '%ostman%'
and high_level_resource = 'recurring-expenses'
--and user_email not like '%@belvo.co%'
group by 2,1
order by 3 desc

```


