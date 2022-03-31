# Balances

A **Balance** represents the amount of funds available in a checking or savings account over a period of time.


ℹ️ Please note:

- The Balances endpoint is not supported for gig-economy links.
- If your Balance request is not for a checking or savings account, we return an empty array.
- If we cannot calculate the balance for a given day within your requested period, the `balance` and `current_balance` fields will return `null` for that day.

### **🔦 Filterable fields**

Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering
responses](https://developers.belvo.com/docs/searching-and-filtering) article.


|Field| Available Filters|
|---|---|
|`account`|`=`, `in`|
|`account_type`|`=`, `in`|
|`balance`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`collected_at`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`currency`|`=`, `in`|
|`current_balance`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`id`|`=`, `in`|
|`institution`|`=`, `in`|
|`link`|`=`, `in`|
|`value_date`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|


```curl cURL
# Filtering results to have balances greater than 5000
https://sandbox.belvo.com/api/balances/?balance__gt=5000 

# Filtering results to have balances greater than 5000 and in Brazilian Reis
https://sandbox.belvo.com/api/balances/?balance__gt=5000&currency=BRL
```
```javascript Node
//  Filtering results to have balances greater than 5000
client.balances.list({
  filters: {
    balance__gt: 5000
  }
})

//  Filtering results to have balances greater than 5000 and in Brazilian Reis

client.balances.list({
  filters: {
    balance__gt: 5000,
    currency: "BRL"
  }
})
```
```python Python
# Filtering results to have balances greater than 5000
client.Balances.list(balance__gt=5000)

# Filtering results to have balances greater than 5000 and in Brazilian Reis
client.Balances.list(balance__gt=5000, currency="BRL")
```
```ruby Ruby
# Filtering results to have balances greater than 5000
client.balances.list(params: {
  balance__gt: 5000
})

# Filtering results to have balances greater than 5000 and in Brazilian Reis
client.balances.list(params: {
  balance__gt: 5000,
  currency: "BRL"
})
```