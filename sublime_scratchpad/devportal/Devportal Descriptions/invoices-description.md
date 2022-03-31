# Invoices

An Invoice is the representation of an electronic invoice, that can be received or sent, by a business or an individual and has been uploaded to the fiscal institution's website. Multiple INFLOW (invoice received) and
OUTFLOW (invoice sent) invoices can be retrieved inside each link coming from a fiscal institution.


If you want to see example responses for different invoice types, just click the drop-down menu under **Response Samples**.


### **🔦 Filterable fields**


Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.


|Field| Available Filters|

|---|---|
|`collected_at`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`id`|`=`, `in`|
|`invoice_date`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`invoice_identification`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`link`|`=`, `in`|
|`status`|`=`, `in`|
|`total_amount`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`type`|`=`, `in`|


```curl cURL
# Filtering results so that you get Tax Returns from one link:
https://sandbox.belvo.com/api/invoices/?link=link-id

# Filtering results so that you get Tax Returns from two links 
# and are of type normal and their status is vigente:
https://sandbox.belvo.com/api/invoices/?link__in=link-id1,link-id2&informacion_general__tipo_declaracion=Normal&status=vigente
```
```javascript Node
//  Filtering results so that you get the Tax Returns from one link:
client.invoices.list({
  filters: {
    link: "link-id"
  }
})

//  Filtering results so that you get the Tax Returns from two links
// and are of type normal and their status is vigente:
client.invoices.list({
  filters: {
    link__in: "link-id-1, link-id-2",
    informacion_general__tipo_declaracion: "Normal",
    status: "vigente"
  }
})

```
```python Python
# Filtering results so that you get the Tax Return from one link:
client.invoices.list(link="link-id")

# Filtering results so that you get the Tax Returns from two links
# # and are of type normal and their status is vigente:
client.invoices.list(link__in="link-id1,link-id2", informacion_general__tipo_declaracion="Normal", status="vigente")
```
```ruby Ruby
# Filtering results so that you get the Tax Return from one link:
client.invoices.list(params: {
  link: "link-id"
})


# Filtering results so that you get the Tax Returns from two links
# and are of type normal and their status is vigente:
client.invoices.list(params: {
  link__in: "link-id1, link-id1",
  informacion_general__tipo_declaracion: "Normal",
  status: "vigente"
})
```