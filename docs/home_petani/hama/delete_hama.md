---
sidebar_position: 4
---

# Delete Hama

For Petani / Individu

## Delete Hama

Method : **[DELETE]**

Route :
**/v1/hama/:id**

Data required to delete data :

```
id: params
```

### CURL Example

```json
curl
--location --request DELETE 'localhost:8000/v1/delete-hama/3' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJwYXNzd29yZCI6IiQyYiQxMCRPalBXOGRDYW15L2JmSEFwamo1ZC4uUXJEdzU3czBRYUR1U3hVa0JnRTBleTJZLzNYWjRDYSIsIm5vX3RlbHAiOiIxMjM0NTY3ODkwMTIifSwiaWF0IjoxNzE0NzMyODkzLCJleHAiOjE3MTQ4MTkyOTN9.EBtcOes4b3RVgpwhkATHlE9bI1muOA1Tl8GAH5YerIc'
```

## Response

### Success Response

```json
{
  "status": 200,
  "message": "Successfully Delete Hama With ID: 3",
  "error": false
}
```

### Error Response - Prisma

If the id is not found

```json
{
  "status": 400,
  "message": "Something went wrong -> PrismaClientKnownRequestError: \nInvalid `.delete()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/home_petani/hama.service.ts:152:16\n\n  149 \n  150 try {\n  151   await prisma.i_hama\n→ 152     .delete(\nAn operation failed because it depends on one or more records that were required but not found. Record to delete does not exist.",
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