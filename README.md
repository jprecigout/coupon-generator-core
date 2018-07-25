# coupon-generator-core

## Description

<p align="center">
    <img src="https://github.com/jprecigout/coupon-generator-core/blob/master/coupon.png">
</p>

Générateur de coupon de réduction

## Installation via docker

```bash
# generation des images
$ docker-compose build

# demarrage de la stack
$ docker-compose up
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Requêtes

```bash
# création
$ curl -d '{"isPercent":false, "amount": 5, "activate": true}' -H "Content-Type: application/json" -X POST http://localhost:3000/coupon/create

# récupération d'un coupon
$ curl -X GET "http://localhost:3000/coupon/edit/5b4de5092fa29d5515f2aa1f"

# récupération des coupons
$ curl -X GET "http://localhost:3000/coupon/all"
```
