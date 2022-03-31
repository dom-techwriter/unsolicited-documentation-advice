# Institutions

An **Institution** is an entity that Belvo can access information from. It can be a:

  - bank institution, such as Banamex retail banking or HSBC business banking.
  - fiscal institution, such as the Servicio de Administración Tributaria (SAT) in Mexico.
  - gig institution, such as Uber or Rappi.

You can see a complete list of banking institutions by either consultingour [Institutions article](https://developers.belvo.com/docs/institution) or making a List call to these endpoints.


### **🔦 Filterable fields**

Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.


|Field| Available Filters|
|---|---|
|`code__`|`=`, `in`|
|`country_code__`|`=`, `in`|
|`display_name__`|`=`|
|`name__`|`=`, `in`|
|`type__`|`=`, `in`|
|`website__`|`=`|

```curl cURL
# Filtering results so that you get institutions from just one country:
ttps://sandbox.belvo.com/api/institutions/?country_code=br

# Filtering results so that you get institutions from just one country and from gig economy:
ttps://sandbox.belvo.com/api/institutions/?country_code=br&type__in=gig,retail
```
```javascript Node
//  Filtering results so that you get institutions from just one country:
client.institutions.list({
  filters: {
    country_code: "br"
  }
})

//  Filtering results so that you get institutions from just one country and from gig economy:

client.institutions.list({
  filters: {
    country_code: "br",
    type__in="gig, retail"
  }
})
```
```python Python
# Filtering results so that you get institutions from just one country:
client.Institutions.list(country_code="br")

# Filtering results so that you get institutions from just one country and from gig economy:
client.Institutions.list(country_code="br", type__in="gig,retail")
```
```ruby Ruby
# Filtering results so that you get institutions from just one country:
client.institutions.list(params: {
  country_code: "br"
})

# Filtering results so that you get institutions from just one country and from gig economy:
client.institutions.list(params: {
  country_code: "br",
  type__in: "gig,retail"
})
```