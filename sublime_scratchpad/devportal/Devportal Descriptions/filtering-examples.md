# Filtering examples

## Insitutions

```curl cURL
# Filtering results so that you get institutions from just one country:
ttps://api.belvo.com/api/institutions/?country_code=br

# Filtering results so that you get institutions from just one country and from gig economy:
ttps://api.belvo.com/api/institutions/?country_code=br&type__in=gig,retail
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

## Links

```curl cURL
# Filtering results to have links just from two institutions
https://api.belvo.com/api/links/?institution__in=erebor_mx_retail,gringotts_mx_retail 

# Filtering results from one institution and a certain status
https://api.belvo.com/api/links/?institution__in=erebor_mx_retail,gringotts_mx_retail&status=invalid
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


## Accounts

```curl cURL
## Filtering results to have savings accounts with a balance
## between 5000 and 8000 Colombian pesos
https://api.belvo.com/api/accounts/?category=savings&balance__available__range=5000,8000&currency=COP
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

## Balances

```curl cURL
# Filtering results to have balances greater than 5000
https://api.belvo.com/api/balances/?balance__gt=5000 

# Filtering results to have balances greater than 5000 and in Brazilian Reis
https://api.belvo.com/api/balances/?balance__gt=5000&currency=BRL
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


## Incomes

```curl cURL

```
```javascript Node

```
```python Python

```
```ruby Ruby

```


## Owners

```curl cURL

```
```javascript Node

```
```python Python

```
```ruby Ruby

```

## Statements

```curl cURL

```
```javascript Node

```
```python Python

```
```ruby Ruby

```

## Transactions

```curl cURL

```
```javascript Node

```
```python Python

```
```ruby Ruby

```

## Invoices

```curl cURL

```
```javascript Node

```
```python Python

```
```ruby Ruby

```

## Tax compliance status

```curl cURL

```
```javascript Node

```
```python Python

```
```ruby Ruby

```

## Tax returns

```curl cURL

```
```javascript Node

```
```python Python

```
```ruby Ruby

```



