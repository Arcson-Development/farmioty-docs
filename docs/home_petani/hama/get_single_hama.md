---
sidebar_position: 3
---

# Get Hama

For Petani / Individu

## Get Hama

Method : **[GET]**

Route :
**/v1/hama/:id**

Data required to get data :

```
id: params
```

### CURL Example

```json
curl 
--location 'localhost:8000/v1/hama/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJwYXNzd29yZCI6IiQyYiQxMCRPalBXOGRDYW15L2JmSEFwamo1ZC4uUXJEdzU3czBRYUR1U3hVa0JnRTBleTJZLzNYWjRDYSIsIm5vX3RlbHAiOiIxMjM0NTY3ODkwMTIifSwiaWF0IjoxNzE0NzMyODkzLCJleHAiOjE3MTQ4MTkyOTN9.EBtcOes4b3RVgpwhkATHlE9bI1muOA1Tl8GAH5YerIc'
```

## Response

### Success Response

```json
{
  "status": 200,
  "message": "Successfully Get Hama With ID: 1",
  "error": false,
  "data": {
    "hama_id": 1,
    "id_individu": 1,
    "foto_hama": "foto_hama_1e6bxu3j4ft_1_5.jpeg",
    "jenis_hama": "Belalang",
    "intensitas_hama": "Buruk",
    "lokasi_hama": "4",
    "created_at": "2024-05-01T00:00:00.000Z"
  }
}
```

### Error Response - Prisma

If the id is not found

```json
{
    "status": 404,
    "message": "No data with ID: 11 was found",
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
