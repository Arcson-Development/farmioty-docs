---
sidebar_position: 6
---

# Update Coupon

For Petani / Individu

## Update Coupon By ID

Method : **[PUT]**

Route :
**/v1/update-coupon/:id**

Data required to update coupon by id :

```
id: params
```

```json
Authorization: Bearer ...token...
```

| Field             | Data Type | Required     | Description                                                                          |
| ----------------- | --------- | ------------ | ------------------------------------------------------------------------------------ |
| coupon_name       | string    | Not Required | name of the generated coupon                                                         |
| coupon_type       | number    | Not Required | type of the generated coupon                                                         |
| discount_percent  | number    | Not Required | discount counted in percent                                                          |
| discount_straight | number    | Not Required | discount                                                                             |
| quantity          | number    | Not Required | quantity of how many times the coupon can be used                                    |
| expiration_date   | date      | Not Required | when the coupon expires / the data should be in this format 2024-05-29T00:00:00.000Z |

### CURL Example

```json
curl
--location --request PUT 'localhost:8000/v1/update-coupon/4' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJwYXNzd29yZCI6IiQyYiQxMCRPalBXOGRDYW15L2JmSEFwamo1ZC4uUXJEdzU3czBRYUR1U3hVa0JnRTBleTJZLzNYWjRDYSIsIm5vX3RlbHAiOiIxMjM0NTY3ODkwMTIifSwiaWF0IjoxNzE0NzMyODkzLCJleHAiOjE3MTQ4MTkyOTN9.EBtcOes4b3RVgpwhkATHlE9bI1muOA1Tl8GAH5YerIc' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'coupon_name=discount 50%' \
--data-urlencode 'coupon_type=1' \
--data-urlencode 'discount_percent=50'
```

## Response

### Success Response

```json
{
  "status": 200,
  "message": "Successfully Update Coupon With ID: 4",
  "error": false
}
```

### Error Response - Not Found

If the id is not found

```json
{
  "status": 400,
  "message": "PrismaClientKnownRequestError: \nInvalid `.update()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/home_petani/coupon.service.ts:250:10\n\n  247 \n  248 try {\n  249   await prisma.i_coupon\n→ 250     .update(\nAn operation failed because it depends on one or more records that were required but not found. Record to update not found.",
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
