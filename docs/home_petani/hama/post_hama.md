---
sidebar_position: 1
---

# Post Hama

For Petani / Individu

## Post Hama

Method : **[POST]**

Route :
**/v1/post-hama**

Data required to create :

| Field           | Data Type | Required | Description                                       |
| --------------- | --------- | -------- | ------------------------------------------------- |
| id_individu     | string    | Required | poster's id that is connected to m_individu table |
| foto_hama       | file      | Required | an image of the pest                              |
| jenis_hama      | string    | Required | name of the pest                                  |
| intensitas_hama | string    | Required | how bad is the pest infestations                  |
| lokasi_hama     | string    | Required | location of where the pest is on petani's field   |

### CURL Example

```json
curl
--location 'localhost:8000/v1/post-hama' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOjcsInVzZXJuYW1lIjoiZmFyZGhhbjIiLCJwYXNzd29yZCI6IiQyYiQxMCRPalBXOGRDYW15L2JmSEFwamo1ZC4uUXJEdzU3czBRYUR1U3hVa0JnRTBleTJZLzNYWjRDYSIsIm5vX3RlbHAiOiIxMjM0NTY3ODkwMTIifSwiaWF0IjoxNzE0NzMyODkzLCJleHAiOjE3MTQ4MTkyOTN9.EBtcOes4b3RVgpwhkATHlE9bI1muOA1Tl8GAH5YerIc' \
--form 'id_individu="1"' \
--form 'foto_hama=@"postman-cloud:///1ef0147a-dcfd-4780-8c5c-628701248721"' \
--form 'jenis_hama="Belalang"' \
--form 'intensitas_hama="Buruk"' \
--form 'lokasi_hama="4"'
```

## Response

### Success Response

```json
{
  "status": 201,
  "message": "Successfully Post Hama",
  "error": false
}
```

### Error Response - Validation

```json
{
  "status": 400,
  "message": "Jenis Hama cannot be empty",
  "error": true
}
```

### Error Response - Prisma

```json
{
  "status": 400,
  "message": "Something went wrong -> PrismaClientValidationError: \nInvalid `.create()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/home_petani/hama.service.ts:26:10\n\n  23 \n  24 try {\n  25   await prisma.i_hama\n→ 26     .create({\n           data: {\n             m_individu: {\n               connect: {\n                 individu_id: 1\n               }\n             },\n             jenis_hama: \"Belalang\",\n             intensitas_hama: \"Buruk\",\n             lokasi_hama: \"4\",\n             created_at: \"2024-05-03T20:04:48+07:00\",\n         +   foto_hama: String\n           }\n         })\n\nArgument `foto_hama` is missing.",
  "error": true
}
```

### Error Response - Token

```json
{
"status": 401,
"message": "Token Not Found",
"error": true
}
```
