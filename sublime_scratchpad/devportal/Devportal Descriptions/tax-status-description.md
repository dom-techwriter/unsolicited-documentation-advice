## Tax status

A Tax status - or _Constancia de Situación Fiscal_ - is the representation of the tax situation of a person or a business provided by the tax authority in the country.


### **🔦 Filterable fields**


Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.

|Field| Available Filters|
|---|---|
|`collected_at`|`=`, `gt`, `gte`, `lt`, `lte`, `range`|
|`id`|`=`, `in`|
|`link`|`=`, `in`|


```curl cURL
# Filtering results so that you get the Tax Status from one link:
https://api.belvo.com/api/institutions/?link=link
```
```javascript Node
//  Filtering results so that you get the Tax Status from one link:
client.taxstatus.list({
  filters: {
    link: "link_id"
  }
})

```
```python Python
# Filtering results so that you get the Tax Status from one link:
client.TaxStatus.list(link="link")
```
```ruby Ruby
# Filtering results so that you get the Tax Status from one link:
client.tax_status.list(params: {
  link: "link"
})
```