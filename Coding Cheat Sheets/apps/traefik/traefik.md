# Traefik
Traefik is an open-source Edge Router for [Docker](Coding%20Cheat%20Sheets/docker/docker.md), and [Kubernetes](Coding%20Cheat%20Sheets/kubernetes/kubernetes.md) that makes publishing your services a fun and easy experience. It receives requests on behalf of your system and finds out which components are responsible for handling them.

---
## Installation

### Docker

TODO: WIP

### Kubernetes

You can install Traefik via [Helm](tools/helm.md).

```sh
helm repo add traefik https://traefik.github.io/charts

helm repo update

helm install traefik traefik/traefik
```


---
## Dashboard and API
WIP

---
## EntryPoints
WIP

### HTTP Redirection
WIP
```yaml
entryPoints:
  web:
    address: :80
    http:
      redirections:
        entryPoint:
          to: websecure
          scheme: https
```

### HTTPS 
WIP
```yaml
entryPoints:
  websecure:
    address: :443
```


---
## Routers


**traefik.http.routers.router.entrypoints** 
Specifies the Entrypoint for the Router. Setting this to `traefik.http.routers.router.entrypoints: websecure` will expose the Container on the `websecure` entrypoint.
*When using websecure, you should enable `traefik.http.routers.router.tls` as well.

**traefik.http.routers.router.rule**
Specify the Rules for the Router.
*This is an example for an FQDN: Host(`subdomain.your-domain`)*

**traefik.http.routers.router.tls**	
Will enable TLS protocol on the router.

**traefik.http.routers.router.tls.certresolver**
Specifies the Certificate Resolver on the Router.

### PathPrefix and StripPrefix
WIP

```yml
- "traefik.enable=true"
- "traefik.http.routers.nginx-test.entrypoints=websecure"
- "traefik.http.routers.nginx-test.tls=true"
- "traefik.http.routers.nginx-test.rule=PathPrefix(`/nginx-test/`)"
- "traefik.http.routers.nginx-test.middlewares=nginx-test"
- "traefik.http.middlewares.nginx-test.stripprefix.prefixes=/nginx-test"
```

Add `/api` prefix to any requets to `myapidomain.com`
Example: 
  - Request -> `myapidomain.com`
  - Traefik translates this to `myapidomain.com/api` without requestee seeing it
```yml
- "traefik.enable=true"
- "traefik.http.routers.myapp-secure-api.tls=true"
- "traefik.http.routers.myapp-secure-api.rule=Host(`myapidomain.com`)"
- "traefik.http.routers.myapp-secure-api.middlewares=add-api"

# Middleware
- "traefik.http.middlewares.add-api.addPrefix.prefix=/api"
```

---
## CertificatesResolvers
WIP

### dnsChallenge
DNS Providers such as `cloudflare`, `digitalocean`, `civo`, and more. To get a full list of supported providers, look up the [Traefik ACME Documentation](https://doc.traefik.io/traefik/https/acme/) .

```yaml
certificatesResolvers:
  yourresolver:
    acme:
      email: "your-mail-address"
      dnsChallenge:
        provider: your-dns-provider
        resolvers:
          - "your-dns-resolver-ip-addr:53"
```

---
## ServersTransport

### InsecureSkipVerify
If you want to skip the TLS verification from **Traefik** to your **Servers**, you can add the following section to your `traefik.yml` config file.
```yaml
serversTransport:
  insecureSkipVerify: true
```

---
## TLS Settings
Define TLS Settings in Traefik.

### defaultCertificates
```yaml
tls:
  stores:
    default:
      defaultCertificate:
        certFile: /your-traefik-cert.crt
        keyFile: /your-traefik-key.key
```

### options
Define TLS Options like disabling insecure TLS1.0 and TLS 1.1.
```yaml
tls:
  options:
    default:
      minVersion: VersionTLS12
```

---
## Providers
WIP

### File
WIP
```yaml
providers:
  file:
```

### Docker
With `exposedByDefault: false`, Traefik won't automatically expose any containers by default. Setting `traefik.enable: true`, will expose the Container.

```yaml
providers:
  docker:
    exposedByDefault: false
```

### Kubernetes
WIP

---
## Ingress
WIP

---
## Log
WIP

```yaml
log:
  level: ERROR
```

---
## Global
WIP

```yaml
global:
  checkNewVersion: true
  sendAnonymousUsage: false
```

