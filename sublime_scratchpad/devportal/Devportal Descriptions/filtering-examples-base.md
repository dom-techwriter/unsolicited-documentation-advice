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