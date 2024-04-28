---
sidebar_position: 3
---

# Update Testimonial

For Landing Page

## Update Testimonials

Method : **[PUT]**

Route :
**/v1/update-testimonial/:id**

Data required to update :

```
id: params
```

| Field     | Data Type | Required     | Description                                     |
| --------- | --------- | ------------ | ----------------------------------------------- |
| pic       | file      | Not Required | stringified pic for testimonial                 |
| message   | string    | Not Required | Message for testimonial                         |
| nama      | string    | Not Required | Nama who's message is from for testimonial      |
| pekerjaan | string    | Not Required | Pekerjaan who's message is from for testimonial |

### CURL Example

```json
curl
--location --request PUT 'localhost:8000/v1/update-testimonial/6' \
--form 'pict=@"/home/fardhan/Pictures/pexels-rattasat-1453152-2804327.jpg"' \
--form 'message="kerja tanpa tidur"' \
--form 'nama="fardhan"' \
--form 'pekerjaan="kepala sekolah"'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": {
    "testimonial_id": 6,
    "pict": "pict_58d3c40b2g5_28_4.jpg",
    "message": "kerja tanpa tidur",
    "nama": "fardhan",
    "pekerjaan": "kepala sekolah"
  },
  "message": "Successfully Update Testimonial with ID: 6",
  "error": false
}
```

### Error Response - Prisma

If the ID is not found

```json
{
  "status": 400,
  "message": "PrismaClientKnownRequestError: \nInvalid `.update()` invocation in\n/home/fardhan/Code/farmioty/farmioty-be/src/service/landing_page.service.ts:111:10\n\n  108 \n  109 try {\n  110   await prisma.testimonial\n→ 111     .update(\nAn operation failed because it depends on one or more records that were required but not found. Record to update not found.",
  "error": true
}
```
