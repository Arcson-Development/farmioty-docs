---
sidebar_position: 4
---

# Delete Testimonial

For Landing Page

## Delete Testimonials

Method : **[DELETE]**

Route :
**/v1/delete-testimonial/:id**

Data required to delete :

```
id: params
```

### CURL Example

```json
curl
--location --request DELETE 'localhost:8000/v1/delete-testimonial/1'
```

## Response

### Success Response

```json
{
  "status": 200,
  "message": "Successfully Delete Testimonial with ID: 1",
  "error": false
}
```

### Error Response - Prisma

If the id is not found

```json
{
  "status": 400,
  "message": "PrismaClientKnownRequestError: \nInvalid `.delete()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/landing_page.service.ts:156:16\n\n  153 \n  154 try {\n  155   await prisma.testimonial\n→ 156     .delete(\nAn operation failed because it depends on one or more records that were required but not found. Record to delete does not exist.",
  "error": true
}
```
