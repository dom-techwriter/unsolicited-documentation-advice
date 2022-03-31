var belvo = require("belvo");

const client = new Client(
    '41c39182-0d16-49e2-99f5-57652cc8ea6d',
    'OI@Yy91OTpmxyk4rIW4iapbA4pARLamLs9HxTpk@Z#nmeBWyop92V8Hwa9EhJ3Nc',
    'sandbox'
);

// Create the link and retrieve accounts

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

registerLinkAndRetrieveAccounts()