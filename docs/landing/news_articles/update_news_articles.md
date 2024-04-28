---
sidebar_position: 4
---

# Update News and Articles

For Landing Page

## Update News and Articles

Method : **[PUT]**

Route :
**/v1/update-news-articles/:id**

Data required to update :

```
id: params
```

| Field       | Data Type | Required     | Description                                      |
| ----------- | --------- | ------------ | ------------------------------------------------ |
| title       | string    | Not Required | title for news and articles                      |
| content     | string    | Not Required | content / body for news and articles             |
| author      | string    | Not Required | author who posted the news and articles          |
| news_images | files     | Not Required | stringified images for related news and articles |

### CURL Example

```json
curl
--location --request PUT 'localhost:8000/v1/update-news-articles/2' \
--form 'title="Hardest Plant To Grow"' \
--form 'content="A few hardest plant to grow"' \
--form 'author="oliver skies"' \
--form 'news_images=@"postman-cloud:///1ef0147a-dcfd-4780-8c5c-628701248721"' \
--form 'news_images=@"postman-cloud:///1ef0095c-a98e-46c0-b904-3ec9020fbfe5"'
```

## Response

### Success Response

```json
{
  "status": 200,
  "message": "Successfully Update News & Articles with ID: 2",
  "error": false
}
```

### Error Response - Prisma

If the id is not found

```json
{
  "status": 400,
  "message": "PrismaClientKnownRequestError: \nInvalid `.update()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/landing_page.service.ts:355:12\n\n  352 try {\n  353   if (dto.news_images !== undefined) {\n  354     await prisma.news_and_articles\n→ 355       .update(\nAn operation failed because it depends on one or more records that were required but not found. Record to update not found.",
  "error": true
}
```
