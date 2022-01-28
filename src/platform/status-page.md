# Status pages

Status pages allows you to communicate the status of services monitored with Netweak to your users.

## Using a custom domain

::: tip
This feature is not available in our free plans, please check [our pricing page](https://netweak.com/pricing) for more informations.
:::

You can use your own domain or subdomain to serve your status page (eg: **status.company.com** instead of a **company.nwstatus.com**).

![Netweak status page](https://i.imgur.com/69nDSs1.png)

### Linking your domain

In order to link your domain, go to your status page's settings and fill the "Custom domain" field with the subdomain you choose. Each page can only be linked to one custom domain.

::: warning
Because we need to generate SSL certicates for each new custom domain, you won't be able to edit your page's custom domain more than twice per 24 hours. Sorry for the inconveniance.
:::

![Dashboard](https://i.imgur.com/vjeDdXS.png)

### DNS Configuration

The next step is to point your domain to our servers, to do this you will need to access the panel of your DNS provider (your registrar or a CDN such as CloudFlare).

You need to create one record of type **CNAME**, pointing to **custom.nwstatus.com**. For CloudFlare users we recommend you disable the "proxy" feature to avoid any issue.

```
status.your-company.com. IN CNAME custom.nwstatus.com.
```

![Record creation](https://i.imgur.com/wv06Ztw.png)

Once done, your page make take up to 10 minutes to become accessible as we need to generate a SSL certificate for your domain.

::: tip
If you encounter difficulties configuring your domain please [get in touch](https://netweak.com/contact), our technical support will be happy to help!
:::