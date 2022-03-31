# Statements

A **Statement** contains a summary of monthly **Transactions** inside an **Account**.

ℹ️ Please note that the Statements endpoint is currently in BETA and only available for institutions in Mexico 🇲🇽.


### **🔦 Filterable fields**


Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.


|Field| Available Filters|
|---|---|
|`account`|`=`, `in`|
|`account_category`|`=`, `in`|
|`collected_at`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`final_balance`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`id`|`=`, `in`|
|`institution`|`=`, `in`|
|`link`|`=`, `in`|
|`period_end_date`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`period_start_date`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`previous_balance`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`total_inflow_amount`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`total_outflow_amount`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`total_inflow_transactions`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`total_outflow_transactions`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|

```curl cURL
# Filtering results to have statements from one link:
https://sandbox.belvo.com/api/statements/?link=link-id

# Filtering results to have statements from one link where the total inflow amount is greater than 5000:
https://sandbox.belvo.com/api/statements/?link=link-id&total_inflow_amount__gt=5000
```
```javascript Node
// Filtering results to have statements from one link:
client.statements.list({
  filters: {
    link: "link-id"
  }
})

// Filtering results to have statements from one link where the total inflow amount is greater than 5000:

client.statements.list({
  filters: {
    link: "link-id",
    total_inflow_amount__gt: 5000
  }
})
```
```python Python
# Filtering results to have statements from one link:
client.Statements.list(link="link-id")

# Filtering results to have statements from one link where the total inflow amount is greater than 5000:
client.Statements.list(link="link-id", total_inflow_amount__gt=5000)
```
```ruby Ruby
# Filtering results to have statements from one link:
client.statements.list(params: {
  link: "link-id"
})

# Filtering results to have statements from one link where the total inflow amount is greater than 5000:
client.statements.list(params: {
  link: "link-id",
  total_inflow_amount__gt: 5000
})
```