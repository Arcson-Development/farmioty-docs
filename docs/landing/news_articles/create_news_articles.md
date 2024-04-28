---
sidebar_position: 1
---

# Create News and Articles

For Landing Page

## Create News and Articles

Method : **[POST]**

Route :
**/v1/create-news-articles**

Data required to create :

| Field       | Data Type | Required | Description                                      |
| ----------- | --------- | -------- | ------------------------------------------------ |
| title       | string    | Required | title for news and articles                      |
| content     | string    | Required | content / body for news and articles             |
| author      | string    | Required | author who posted the news and articles          |
| news_images | files     | Required | stringified images for related news and articles |

### CURL Example

```json
curl 
--location 'localhost:8000/v1/create-news-articles' \
--form 'title="Easiest Plant To Grow"' \
--form 'content="Several easiest plant to grow"' \
--form 'author="oliver skyes"' \
--form 'news_images=@"postman-cloud:///1ef0147a-dcfd-4780-8c5c-628701248721"' \
--form 'news_images=@"postman-cloud:///1ef0095c-a98e-46c0-b904-3ec9020fbfe5"'
```

## Response

### Success Response

```json
{
    "status": 201,
    "message": "Successfully Create News & Articles",
    "error": false
}
```

### Error Response - Validation

```json
{
    "status": 400,
    "message": "Title cannot be empty",
    "error": true
}
```
