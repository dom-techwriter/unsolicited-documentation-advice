var belvo = require("belvo").default;

var client = new belvo(
  'YOUR-KEY-ID',
  'YOUR-SECRET',
  'sandbox'
);

// Create the link
client.connect()
.then(function () {
  client.links.register('banamex_mx_retail', 'johndoe', 'supersecret')
    .then(function (res) {
      return res
    })
    .then(clients.accounts.retrieve(res))
    .catch(function (error) {
      console.log(error);
    });
});


let linkId = widget_callback_response.id

function registerLinkAndRetrieveAccounts () {
  return client.connect().then(function () {
      return client.links.register('erebor_mx_retail', 'bnk1002', 'full')
          .then(function (response) {
              return client.accounts.retrieve(response.id);
          })
          .then(function (response) {
              console.error(response)
          })
          .catch(function (error) {
              console.error(error)
          });
  })
}


async function registerLinkAndRetrieveAccounts () {
  try {
      await client.connect()
      const link = await client.links.register('erebor_mx_retail', 'bnk1006', 'supersecret');
      console.log(link)
      return await client.accounts.retrieve(link.id);
  } catch (error) {
      console.log(error);
  }
}