---
sidebar_position: 7
---

# Delete Coupon

For Petani / Individu

**coupon_status for expired is 2**

## Delete Coupon By ID

Method : **[DELETE]**

Route :
**/v1/delete-coupon/:id**

Data required to delete coupon by id :

```
id: params
```

```json
Authorization: Bearer ...token...
```

### CURL Example

```json
curl
--location --request DELETE 'localhost:8000/v1/delete-coupon/4' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJwYXNzd29yZCI6IiQyYiQxMCRPalBXOGRDYW15L2JmSEFwamo1ZC4uUXJEdzU3czBRYUR1U3hVa0JnRTBleTJZLzNYWjRDYSIsIm5vX3RlbHAiOiIxMjM0NTY3ODkwMTIifSwiaWF0IjoxNzE0NzMyODkzLCJleHAiOjE3MTQ4MTkyOTN9.EBtcOes4b3RVgpwhkATHlE9bI1muOA1Tl8GAH5YerIc'
```

## Response

### Success Response

```json
{
  "status": 200,
  "message": "Successfully Delete Coupon With ID: 4",
  "error": false
}
```

### Error Response - Not Found

If the id is not found

```json
{
  "status": 400,
  "message": "PrismaClientKnownRequestError: \nInvalid `.delete()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/home_petani/coupon.service.ts:296:16\n\n  293 \n  294 try {\n  295   await prisma.i_coupon\n→ 296     .delete(\nAn operation failed because it depends on one or more records that were required but not found. Record to delete does not exist.",
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
