---
sidebar_position: 4
---

# Update Coupon Status To Active

For Petani / Individu

coupon_status for active is 1

## Update Coupon Status To Active By ID

Method : **[PUT]**

Route :
**/v1/coupon-to-active/:id**

Data required to update coupon_status to active by id :

```
id: params
```

```json
Authorization: Bearer ...token...
```

### CURL Example

```json
curl
--location --request PUT 'localhost:8000/v1/coupon-to-active/5' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJwYXNzd29yZCI6IiQyYiQxMCRPalBXOGRDYW15L2JmSEFwamo1ZC4uUXJEdzU3czBRYUR1U3hVa0JnRTBleTJZLzNYWjRDYSIsIm5vX3RlbHAiOiIxMjM0NTY3ODkwMTIifSwiaWF0IjoxNzE0NzMyODkzLCJleHAiOjE3MTQ4MTkyOTN9.EBtcOes4b3RVgpwhkATHlE9bI1muOA1Tl8GAH5YerIc'
```

## Response

### Success Response

```json
{
  "status": 200,
  "message": "Successfully Update Status Coupon With ID: 5 To Be Active",
  "error": false
}
```

### Error Response - Not Found

If the id is not found

```json
{
  "status": 400,
  "message": "PrismaClientKnownRequestError: \nInvalid `.update()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/home_petani/coupon.service.ts:167:10\n\n  164 \n  165 try {\n  166   await prisma.i_coupon\n→ 167     .update(\nAn operation failed because it depends on one or more records that were required but not found. Record to update not found.",
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
