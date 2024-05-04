---
sidebar_position: 1
---

# Generate Coupon

For Petani / Individu

## Generate Coupon

Method : **[POST]**

Route :
**/v1/generate-coupon**

Data required to generate coupon :

```json
Authorization: Bearer ...token...
```

| Field             | Data Type | Required     | Description                                                                          |
| ----------------- | --------- | ------------ | ------------------------------------------------------------------------------------ |
| coupon_name       | string    | Required     | name of the generated coupon                                                         |
| coupon_type       | number    | Not Required | type of the generated coupon                                                         |
| discount_percent  | number    | Not Required | discount counted in percent                                                          |
| discount_straight | number    | Not Required | discount                                                                             |
| quantity          | number    | Not Required | quantity of how many times the coupon can be used                                    |
| expiration_date   | date      | Required     | when the coupon expires / the data must be in this format 2024-05-29T00:00:00.000Z |

### CURL Example

```json
curl
--location 'localhost:8000/v1/generate-coupon' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJwYXNzd29yZCI6IiQyYiQxMCRPalBXOGRDYW15L2JmSEFwamo1ZC4uUXJEdzU3czBRYUR1U3hVa0JnRTBleTJZLzNYWjRDYSIsIm5vX3RlbHAiOiIxMjM0NTY3ODkwMTIifSwiaWF0IjoxNzE0NzMyODkzLCJleHAiOjE3MTQ4MTkyOTN9.EBtcOes4b3RVgpwhkATHlE9bI1muOA1Tl8GAH5YerIc' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'coupon_name=discount alat' \
--data-urlencode 'coupon_type=2' \
--data-urlencode 'discount_straight=200000' \
--data-urlencode 'quantity=2' \
--data-urlencode 'expiration_date=2024-05-29T00:00:00.000Z'
```

## Response

### Success Response

```json
{
  "status": 201,
  "message": "Successfully Create Coupon",
  "error": false
}
```

### Error Response - Validation

```json
{
  "status": 400,
  "message": "Coupon Name cannot be empty",
  "error": true
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
