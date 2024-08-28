# React compiler

This repository demonstrates the mechanisms of [React Suspense](https://react.dev/reference/react/Suspense) and how it is affected by recent changes to React. 

## Running locally

_Note: This project was built using `node@20` and `npm@10` and hasn't been tested for other versions._

To run the application locally first amend the following line to your `/etc/hosts` file:

```
127.0.0.1    dev.reactsuspense.io
```

Without this the vite bundler will fail to start the application on its intended domain. After this run:

> npm i && npm run start

This will start the dev server at `https://dev.reactsuspense.io:4000/app`.

The dev server creates self signed certificates which needs to be added to your keychain in order to run `https`. Open `{node_modules}/.vite/.basic-ssl/_cert.pem` with Keychain Access.In Keychain Access, double click the certificate and under the collapsible section _"Trust"_ select _"Always trust"_ in the select menu labelled _"When using this certificate"_.

### Running React canary 

To see the implications of react 19, do the following. 

1. Update the `"react"` and `"react-dom"` versions to `"beta"`, in package.json. 
2. Delete the `package-lock.json` and `node_modules` folder

Then run the follwing command

> npm i --legacy-peer-deps

_Note `legacy-peer-deps` as other dependencies has unmet peer depenency for beta version of react 19_
