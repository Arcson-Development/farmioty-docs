---
sidebar_position: 5
---

# Delete News and Articles By ID

For Landing Page

## Delete News and Articles By ID

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
--location --request DELETE 'localhost:8000/v1/delete-news-articles/4'
```

## Response

### Success Response

```json
{
  "status": 200,
  "message": "Successfully Delete News & Articles with ID: 4",
  "error": false
}
```

### Error Response - Prisma

If the id is not found

```json
{
  "status": 400,
  "message": "PrismaClientKnownRequestError: \nInvalid `.delete()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/landing_page.service.ts:428:16\n\n  425 \n  426 try {\n  427   await prisma.news_and_articles\n→ 428     .delete(\nAn operation failed because it depends on one or more records that were required but not found. Record to delete does not exist.",
  "error": true
}
```
