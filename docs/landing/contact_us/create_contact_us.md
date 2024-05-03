---
sidebar_position: 1
---

# Create Contact Us

For Landing Page

## Create Contact Us

Method : **[POST]**

Route :
**/v1/create-contact-us**

Data required to create contact us :

| Field   | Data Type | Required | Description                       |
| ------- | --------- | -------- | --------------------------------- |
| nama    | string    | Required | nama of the one who contact us    |
| no_telp | string    | Required | no_telp of the one who contact us |
| email   | string    | Required | email of the one who contact us   |
| message | string    | Required | message of the one who contact us |

### CURL Example

```json
curl
--location 'localhost:8000/v1/create-contact-us' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'nama=fardhan' \
--data-urlencode 'no_telp=12345678901' \
--data-urlencode 'email=dhan@gmail.com' \
--data-urlencode 'message=message sent'
```

## Response

### Success Response

```json
{
  "status": 201,
  "message": "Successfully Create Contact Us",
  "error": false
}
```

### Error Response - Validation

```json
{
  "status": 400,
  "message": "Nama cannot be empty",
  "error": true
}
```
