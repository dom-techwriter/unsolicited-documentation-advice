# Invoices

An Invoice is the representation of an electronic invoice, that can be received or sent, by a business or an individual and has been uploaded to the fiscal institution's website. Multiple INFLOW (invoice received) and OUTFLOW (invoice sent) invoices can be retrieved inside each link coming from a fiscal institution.


If you want to see example responses for different invoice types, just click the drop-down menu under **Response Samples**.

### **🔦 Filterable fields**


Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.


|Field| Available Filters|
|---|---|
|`collected_at`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`email`|`=`|
|`id`|`=`, `in`|
|`link`|`=`, `in`|

```curl cURL
# Filtering results so that you get the emails of one link:
https://sandbox.belvo.com/api/owners/?email=filtering@belvo.com

```
```javascript Node
// Filtering results so that you get the emails of one link:
client.owners.list({
  filters: {
    email: "filtering@belvo.com"
  }
})

```
```python Python
# Filtering results so that you get the emails of one link:
client.Owners.list(email="filtering@belvo.com")

```
```ruby Ruby
# Filtering results so that you get the emails of one link:
client.owners.list(params: {
  email: "filtering@belvo.com"
})

})
```


