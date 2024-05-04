---
sidebar_position: 3
---

# Get Single Coupon

For Petani / Individu

## Get Single Coupon By ID

Method : **[GET]**

Route :
**/v1/coupon/:id**

Data required to get single data by id :

```
id: params
```

```json
Authorization: Bearer ...token...
```

### CURL Example

```json
curl 
--location 'localhost:8000/v1/hama/5' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJwYXNzd29yZCI6IiQyYiQxMCRPalBXOGRDYW15L2JmSEFwamo1ZC4uUXJEdzU3czBRYUR1U3hVa0JnRTBleTJZLzNYWjRDYSIsIm5vX3RlbHAiOiIxMjM0NTY3ODkwMTIifSwiaWF0IjoxNzE0NzMyODkzLCJleHAiOjE3MTQ4MTkyOTN9.EBtcOes4b3RVgpwhkATHlE9bI1muOA1Tl8GAH5YerIc'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": {
    "hama_id": 5,
    "id_individu": 1,
    "foto_hama": "foto_hama_x8vcpltal0r_3_5.jpeg",
    "jenis_hama": "Belalang",
    "intensitas_hama": "Buruk",
    "lokasi_hama": "4",
    "created_at": "2024-05-03T00:00:00.000Z"
  },
  "message": "Successfully Get Hama With ID: 5",
  "error": false
}
```

### Error Response - Not Found

If the id is not found

```json
{
  "status": 404,
  "message": "No data with ID: 1 was found",
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
