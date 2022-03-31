# Transactions

A **Transaction** contains the detailed information of each movement inside an **Account**.



### **🔦 Filterable fields**


Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, seeour [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.


|Field| Available Filters|
|---|---|
|`account`|`=`, `in`|
|`account__balance__available`|`=`, `lt`, `lte`, `range`|
|`account__balance__current`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`account_type`|`=`, `in`|
|`accounting_date`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`amount`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`credit_card_data__bill_name`|`=`, `in`|
|`collected_at`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`currency`|`=`, `in`|
|`id`|`=`, `in`|
|`institution`|`=`, `in`|
|`link`|`=`, `in`|
|`reference`|`=`, `in`|
|`status`|`=`, `in`|
|`type`|`=`, `in`|
|`value_date`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|

```curl cURL
# Filtering results to have transactions just from one link
https://api.belvo.com/api/transactions/?link=link_id

# Filtering results to have transactions just form one link and between a date range
https://api.belvo.com/api/transactions/?link=link_id&value_date__range=2020-10-01,2020-12-01

```
```javascript Node
// Filtering results to have transactions just from one link
https://api.belvo.com/api/transactions/?link=link_id

client.transactions.list({
  filters: {
    link: "link_id"
  }
})

// Filtering results to have transactions just form one link and between a date range
client.transactions.list({
  filters: {
    link: "link_id",
    value_date__range: "2020-10-01,2020-12-01"
  }
})

```
```python Python
# Filtering results to have links just from two institutions
client.Transactions.list(link="link_id")

# Filtering results from one institution and a certain status
client.Transactions.list(link="link_id", value_date__range="2020-10-01,2020-12-01")

```
```ruby Ruby
# Filtering results to have links just from two institutions
client.transactions.list(params: {
  link: "link_id"
})

# Filtering results from one institution and a certain status
client.transactions.list(params: {
  link: "link_id",
  value_date__range: "2020-10-01,2020-12-01"
})

})
