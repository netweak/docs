# Authentification

The Netweak API uses keys / tokens to authenticate requests. You can view and manage your API tokens in [your account settings](https://netweak.com/user/api-tokens).

::: warning
As of now API tokens are **account-wide**, not team-wide! Meaning that your API token carry access to all the teams you own or you have joined.
:::

Your API tokens carry many privileges, so be sure to keep them secure! Do not share your secret API tokens in publicly accessible areas such as GitHub, client-side code, and so forth.

It is recommended that you set the minimum required permissions for each API key, available permission scopes are: **READ**, **CREATE**, **UPDATE**, **DELETE**.

## Getting a token

You can view and manage your API tokens in [your account settings](https://netweak.com/user/api-tokens).

::: danger
API tokens make give full access to your account and all your teams, make sure to protect them just like your password.
:::

## Making requests

Each request made to the Netweak API needs to have your key in the "authorization" header.

```
Authorization: Bearer <API_KEY>
```
*Make sure to replace <API_KEY> with your actual API key.*

## Examples

### Curl
```bash
curl https://api.netweak.com/user \
  -H "Authorization: Bearer Q6r74RcxN6W9fl5eJzEmgyHzwaQelXuEBZYrKbjD"
```

### JS (using axios)
```js
axios.get('https://api.netweak.com/user', {
    headers: {
        "Authorization": `Bearer ${token}`
    }})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
```