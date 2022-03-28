# Writing tests


## Post-request tests

```js
const response = pm.response.json();

```


### Testing that something isn't null

`to.not.be.null`

```js
pm.test("Message you want to display if there's an error", function () {
    pm.expect(response.parameter_to_test, "Message to display").to.not.be.null;
});

```