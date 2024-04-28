---
sidebar_position: 1
---

# Create Testimonial

For Landing Page

## Create Testimonials

Method : **[POST]**

Route :
**/v1/create-testimonial**

Data required to get all datas :

| Field     | Data Type | Required | Description                                     |
| --------- | --------- | -------- | ----------------------------------------------- |
| pic       | file      | Required | stringified pic for Testimonial                 |
| message   | string    | Required | Message for Testimonial                         |
| nama      | string    | Required | Nama who's message is from for Testimonial      |
| pekerjaan | string    | Required | Pekerjaan who's message is from for Testimonial |

### CURL Example

```json
curl
--location 'localhost:8000/v1/create-testimonial' \
--form 'pict=@"/home/fardhan/Pictures/elon.jpeg"' \
--form 'message="Kerja lagi"' \
--form 'nama="fardhan"' \
--form 'pekerjaan="distributor"'
```

## Response

### Success Response

```json
{
  "status": 201,
  "message": "Successfully Create Testimonial",
  "error": false
}
```

### Error Response - Prisma

```json
{
  "status": 400,
  "message": "PrismaClientValidationError: \nInvalid `.create()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/landing_page.service.ts:29:10\n\n  26 \n  27 try {\n  28   await prisma.testimonial\n→ 29     .create({\n           data: {\n             message: \"Kerja lagi\",\n             nama: \"fardhan\",\n             pekerjaan: \"distributor\",\n         +   pict: String\n           }\n         })\n\nArgument `pict` is missing.",
  "error": true
}
```

### Error Response - Validation

```json
{
    "status": 400,
    "message": "Message cannot be empty",
    "error": true
}
```