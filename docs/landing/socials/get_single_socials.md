---
sidebar_position: 1
---

# Get Single Socials

For Landing Page

## Get Single Social By ID

Method : **[GET]**

Route :
**/v1/socials/:id**

Data required to get data :

```
id: params
```

### CURL Example

```json
curl
--location 'localhost:8000/v1/socials/1'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": {
    "social_id": 1,
    "social_name": "Facebook",
    "link": "https://id-id.facebook.com"
  },
  "message": "Successfully Get Socials with ID: 1",
  "error": false
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
