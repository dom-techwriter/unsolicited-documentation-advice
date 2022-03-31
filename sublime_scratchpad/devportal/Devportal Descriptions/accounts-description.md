# Accounts

An **Account** is the representation of a bank account inside a financial or gig institution. An end user can have several **Accounts** inside each **Link**. For example, one **Link** can have one checking account, several credit cards, and a loan or investment account.

### **🔦 Filterable fields**


Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.


|Field| Available Filters|
|---|---|
|`balance__available`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`balance__current`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`bank_product_id`|`=`|
|`category`|`=`, `in`|
|`collected_at`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`currency`|`=`*, `in`|
|`id`|`=`, `in`|
|`institution`|`=`, `in`|
|`internal_identification`|`=`|
|`link`|`=`, `in`|
|`name`|`=`, `icontains`|
|`number`|`=`, `in`|
|`public_identification_name`|`=`|
|`public_identification_value`|`=`|
|`type`|`=`, `in`|

```curl cURL
## Filtering results to have savings accounts with a balance
## between 5000 and 8000 Colombian pesos
https://sandbox.belvo.com/api/accounts/?category=savings&balance__available__range=5000,8000&currency=COP
```
```javascript Node
// Filtering results to have savings accounts with a balance
// between 5000 and 8000 Colombian pesos
client.accounts.list({
  filters: {
    category: "savings",
    balance__available__range: "5000,8000",
    currency: "COP"
  }
})
```
```python Python
## Filtering results to have savings accounts with a balance
## between 5000 and 8000 Colombian pesos
client.Accounts.list(category="savings",balance__available__range="5000,8000",currency="COP")
```
```ruby Ruby
## Filtering results to have savings accounts with a balance
## between 5000 and 8000 Colombian pesos
client.accounts.list(params: {
  category: "savings",
  balance__available__range: "5000,8000",
  currency: "COP"
})
```