# Links

A **Link** is a set of credentials associated to an end-user's access to an **Institution**.

An example would be the username and password used to log in to an online banking platform.

You will need to register a **Link** before accessing information from that specific end-user, such as account or transaction details.

You have the possibility to register two types of links:


## Single links


Single links are used to perform ad hoc data access to accounts, owners, transactions, and so on. For example, you can use it when you want to do an underwriting process to assess risk before lending money.
For single links, you have to perform POST calls to an institution **every time** you want to access fresh data.


## Recurrent links (default)


With recurrent links, Belvo automatically refreshes information daily and notifies you via [webhook](https://developers.belvo.com/docs/webhooks) so you always have up-to-date data. Then, when you receive the webhook, you can use GET requests to the List or Detail endpoints to instantly access up-to-date information, without needing to connect to the institution.


You can also make POST calls directly to the institution, as with single links, as soon as the link is created. However, to make GET requests, you need to wait until you receive the webhook event. Otherwise, you will receive responses with empty data fields.


✅ We recommend using our [Connect Widget](https://developers.belvo.com/docs/connect-widget) to handle link creation and link status updates.


### **🔦 Filterable fields**

Please see the table below for an alphabetized list of fields that you can filter your responses by. For more information on how to use filters, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) article.


|Field| Available Filters|
|---|---|
|`access_mode`|`=`|
|`created_by`|`not_in`|
|`external_id`|`=`, `in`|
|`id`|`=`, `in`|
|`institution`|`=`, `in`|
|`refresh_rate`|`=`|
|`status`|`=`, `in`|

```curl cURL
# Filtering results to have links just from two institutions
https://sandbox.belvo.com/api/links/?institution__in=erebor_mx_retail,gringotts_mx_retail 

# Filtering results from one institution and a certain status
https://sandbox.belvo.com/api/links/?institution__in=erebor_mx_retail,gringotts_mx_retail&status=invalid
```
```javascript Node
//  Filtering results to have links just from two institutions
client.links.list({
  filters: {
    institution__in: "erebor_mx_retail,gringotts_mx_retail"
  }
})

//  Filtering results from one institution and a certain status

client.links.list({
  filters: {
    institution__in: "erebor_mx_retail,gringotts_mx_retail",
    status="invalid"
  }
})
```
```python Python
# Filtering results to have links just from two institutions
client.Links.list(institution__in="erebor_mx_retail,gringotts_mx_retail")

# Filtering results from one institution and a certain status
client.Links.list(institution__in="erebor_mx_retail,gringotts_mx_retail", status="invalid")
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