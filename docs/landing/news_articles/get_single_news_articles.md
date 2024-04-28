---
sidebar_position: 3
---

# Get Single News and Articles By ID

For Landing Page

## Get Single News and Articles By ID

Method : **[GET]**

Route :
**/v1/news-articles/:id**

Data required to get data :

```
id: params
```

### CURL Example

```json
curl
--location 'localhost:8000/v1/news-articles/1'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": {
    "news_id": 1,
    "title": "Hardest Plant To Grow",
    "content": "Several hardest plant to grow",
    "author": "oliver skyes",
    "news_images": [
      "news_images_z9ttykwhv3a_28_4.jpeg",
      "news_images_akhq8ipkeyk_28_4.jpg"
    ],
    "created_at": "2024-04-27T18:09:05.000Z",
    "updated_at": null
  },
  "message": "Successfully Get News & Articles with ID: 1",
  "error": false
}
```

### Error Response - Prisma

If the id is not found

```json
{
  "status": 400,
  "message": "Error: No News & Articles was found with ID: 14",
  "error": true
}
```
