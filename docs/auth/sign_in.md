---
sidebar_position: 5
---

# Sign In

Role 1 : Petani / Individu
Role 2 : Poktan / Kelompok Tani
Role 3 : Penyuluh
Role 4 : Supplier Alat

## Sign In

Method : **[POST]**

Route :
**/v1/sign-in**

Data required to sign in :

| Field    | Data Type | Required | Description |
| -------- | --------- | -------- | ----------- |
| username | string    | Required | username    |
| password | string    | Required | password    |

### CURL Example

```json
curl
--location 'localhost:8000/v1/sign-in' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'username=fardhan2' \
--data-urlencode 'password=12345678'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": {
    "user_id": 7,
    "id_role": 4
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJub190ZWxwIjoiMTIzNDU2Nzg5MDEyIn0sImlhdCI6MTcxNDg5MDUzOCwiZXhwIjoxNzE0OTc2OTM4fQ.dCpE4mwoIWDTNqm_I846Kt8qOsvdsFq91SNTzXr6SFs",
  "message": "Successfully sign in",
  "error": false
}
```

### Error Response - Joi Validation

```json
{
  "status": 400,
  "message": "Username cannot be empty",
  "error": true
}
```

### Error Response - Username is not found

```json
{
    "status": 400,
    "message": "User can't be found",
    "error": true
}
```

### Error Response - Username or Password doesn't match

```json
{
    "status": 400,
    "message": "Username or Password is incorrect",
    "error": true
}
```
