# Tax compliance status

A Tax compliance status indicates about whether a person or business is complying with their tax obligations at the moment of the request. The information is extracted from SAT's _Opinion de cumplimiento de Obligaciones Fiscales_ document.

### **🔦 Filterable fields**


Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.

|Field| Available Filters|
|---|---|
|`id`|`=`, `in`|
|`link`|`=`, `in`|


```curl cURL
# Filtering results so that you get Tax Compliance Status from one link:
https://api.belvo.com/api/tax-compliance-status/?link=link-id

# Filtering results so that you get Tax Compliance Status from one link:
https://api.belvo.com/api/tax-compliance-status/?link=link-id1,link-id2
```
```javascript Node
//  Filtering results so that you get the Tax Compliance Status from one link:
client.taxComplianceStatus.list({
  filters: {
    link: "link-id"
  }
})

//  Filtering results so that you get the Tax Compliance Status from two links:
client.taxComplianceStatus.list({
  filters: {
    link__in: "link-id-1, link-id-2"
  }
})

```
```python Python
# Filtering results so that you get the Tax Compliance Status from one link:
client.TaxComplianceStatus.list(link="link-id")

# Filtering results so that you get the Tax Compliance Status from two links:
client.TaxComplianceStatus.list(link__in="link-id1,link-id2")
```
```ruby Ruby
# Filtering results so that you get the Tax Compliance Status from one link:
client.tax_compliance_status.list(params: {
  link: "link-id"
})


# Filtering results so that you get the Tax Compliance Status from two link:
client.tax_compliance_status.list(params: {
  link__in: "link-id1, link-id1"
})
```