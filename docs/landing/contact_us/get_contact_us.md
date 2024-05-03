---
sidebar_position: 2
---

# Get Contact Us

For Landing Page

## Get Contact Us

Method : **[GET]**

Route :
**/v1/contact-us**

### CURL Example

```json
curl
--location 'localhost:8000/v1/contact-us'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": [
    {
      "contact_id": 2,
      "nama": "fardhan",
      "no_telp": "12345678901",
      "email": "dhan@gmail.com",
      "message": "message sent",
      "created_at": "2024-05-03T11:58:32.000Z"
    },
    {
      "contact_id": 1,
      "nama": "fardhan",
      "no_telp": "12345678901",
      "email": "dhan@gmail.com",
      "message": "message sent",
      "created_at": "2024-04-27T18:12:14.000Z"
    }
  ],
  "message": "Successfully Get All Contact Us",
  "error": false
}
```

