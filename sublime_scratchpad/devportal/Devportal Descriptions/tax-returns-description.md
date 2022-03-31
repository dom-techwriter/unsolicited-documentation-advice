A Tax return is the representation of the tax return document sent every year by a person or a business to the tax authority in the country.


The tax return data structure will be different depending on if it is related to a person or a business (you will find examples for both in the endpoints below).


### **🔦 Filterable fields**


Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.


|Field| Available Filters|
|---|---|
|`collected_at`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`id`|`=`, `in`|
|`informacion_general__ejercicio`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`informacion_general__tipo_declaracion`|`=`, `in`|
|`link`|`=`, `in`|



```curl cURL
# Filtering results so that you get Tax Returns from one link:
https://api.belvo.com/api/tax-returns/?link=link-id

# Filtering results so that you get Tax Returns from two links and are of type normal:
https://api.belvo.com/api/tax-returns/?link__in=link-id1,link-id2&informacion_general__tipo_declaracion=Normal,
```
```javascript Node
//  Filtering results so that you get the Tax Returns from one link:
client.taxReturns.list({
  filters: {
    link: "link-id"
  }
})

//  Filtering results so that you get the Tax Returns from two links and are of type normal:
client.taxReturns.list({
  filters: {
    link__in: "link-id-1, link-id-2",
    informacion_general__tipo_declaracion: "Normal"
  }
})

```
```python Python
# Filtering results so that you get the Tax Return from one link:
client.TaxReturns.list(link="link-id")

# Filtering results so that you get the Tax Returns from two links and are of type normal:
client.TaxReturns.list(link__in="link-id1,link-id2", informacion_general__tipo_declaracion: "Normal")
```
```ruby Ruby
# Filtering results so that you get the Tax Return from one link:
client.tax_returns.list(params: {
  link: "link-id"
})


# Filtering results so that you get the Tax Returns from two links and are of type normal:
client.tax_returns.list(params: {
  link__in: "link-id1, link-id1",
  informacion_general__tipo_declaracion: "Normal"
})
```