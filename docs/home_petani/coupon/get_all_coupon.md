---
sidebar_position: 2
---

# Get All Coupon

For Petani / Individu

## Get All Coupon

Method : **[GET]**

Route :
**/v1/coupon**

Data required to get all coupon :

```json
Authorization: Bearer ...token...
```

### CURL Example

```json
curl
--location 'localhost:8000/v1/coupon' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJwYXNzd29yZCI6IiQyYiQxMCRPalBXOGRDYW15L2JmSEFwamo1ZC4uUXJEdzU3czBRYUR1U3hVa0JnRTBleTJZLzNYWjRDYSIsIm5vX3RlbHAiOiIxMjM0NTY3ODkwMTIifSwiaWF0IjoxNzE0NzMyODkzLCJleHAiOjE3MTQ4MTkyOTN9.EBtcOes4b3RVgpwhkATHlE9bI1muOA1Tl8GAH5YerIc'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": [
    {
      "coupon_id": "2de6f7a7-aabd-4eaa-8059-3fd35378159d",
      "coupon_name": "discount alat",
      "coupon_type": 2,
      "expiration_date": "2024-04-29T00:00:00.000Z",
      "quantity": 4,
      "coupon_code": "z8tIwsk",
      "discount_percent": null,
      "discount_straight": 20000,
      "coupon_status": 0,
      "created_at": "2024-04-29T00:00:00.000Z",
      "id": 3
    },
    {
      "coupon_id": "78a51a3d-ea7f-4da1-914f-62d54b377b2c",
      "coupon_name": "discount 50%",
      "coupon_type": 1,
      "expiration_date": "2024-04-29T00:00:00.000Z",
      "quantity": 4,
      "coupon_code": "cA8rCPr",
      "discount_percent": 50,
      "discount_straight": null,
      "coupon_status": 2,
      "created_at": "2024-04-29T00:00:00.000Z",
      "id": 4
    }
  ],
  "message": "Successfully Get Coupon List",
  "error": false
}
```

### Error Response - Token - Unauthorized

```json
{
  "status": 401,
  "message": "Token Not Found",
  "error": true
}
```
