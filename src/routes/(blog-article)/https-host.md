## HTTPS On Your Own Host Domain For Free


Nowaday, many platform open url with https in default for safe, if your website has no security certificate, it may be not  accessible.

>To enable HTTPS on your website, you need to get a certificate (a type of file) from a Certificate Authority (CA). Let’s Encrypt is a CA. In order to get a certificate for your website’s domain from Let’s Encrypt, you have to demonstrate control over the domain.

Follow the instructions with [certbot](https://certbot.eff.org/instructions) to get the certificate from  let’s encrypt

```
sudo http-server -a 0.0.0.0 -p 443 -S -K /etc/letsencrypt/live/www.dogdogame.com/privkey.pem -C /etc/letsencrypt/live/www.dogdogame.com/fullchain.pem
```