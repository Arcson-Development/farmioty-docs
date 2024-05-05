---
sidebar_position: 6
---

# Get User's Profile

## Get User's Profile

Method : **[POST]**

Route :
**/v1/get-profile**

Data required to get user's profile :

```json
Authorization: Bearer ...token...
```

| Field | Data Type | Required | Description        |
| ----- | --------- | -------- | ------------------ |
| token | string    | Required | token from sign in |

### CURL Example

```json
curl
--location 'localhost:8000/v1/get-profile' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjE0LCJ1c2VybmFtZSI6ImZhcmRoYW42Iiwibm9fdGVscCI6IjEyMzQ1Njc4OTAxMiJ9LCJpYXQiOjE3MTQ4OTA4MzcsImV4cCI6MTcxNDk3NzIzN30.tXdbygMuDmNHGGc9fiYHDb2vNg8M9Vxl4ppqqilh9jw' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjE0LCJ1c2VybmFtZSI6ImZhcmRoYW42Iiwibm9fdGVscCI6IjEyMzQ1Njc4OTAxMiJ9LCJpYXQiOjE3MTQ4OTA4MzcsImV4cCI6MTcxNDk3NzIzN30.tXdbygMuDmNHGGc9fiYHDb2vNg8M9Vxl4ppqqilh9jw'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": {
    "user_id": 14,
    "username": "fardhan6",
    "no_telp": "123456789012",
    "id_role": 4,
    "id_individu": null,
    "id_poktan": null,
    "id_penyuluh": null,
    "id_supplier_alat": 4
  },
  "message": "User's found",
  "error": false
}
```

### Error Response - Joi Validation

```json
{
  "status": 400,
  "message": "Token cannot be empty",
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
