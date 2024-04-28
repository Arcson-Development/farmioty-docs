---
sidebar_position: 2
---

# Get All Testimonial

For Landing Page

## Get All Testimonials

Method : **[GET]**

Route :
**/v1/testimonial**

### CURL Example

```json
curl
--location 'localhost:8000/v1/testimonial'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": [
    {
      "testimonial_id": 6,
      "pict": "pict_x135ve8w0l_28_4.jpeg",
      "message": "Kerja lagi",
      "nama": "fardhan",
      "pekerjaan": "distributor"
    },
    {
      "testimonial_id": 5,
      "pict": "pict_al24xke4fiq_28_4.jpeg",
      "message": "Kerja lagi",
      "nama": "fardhan",
      "pekerjaan": "distributor"
    },
    {
      "testimonial_id": 3,
      "pict": "pict_i3cpeckfdye_28_4.jpg",
      "message": "Kerja lagi",
      "nama": "fardhan",
      "pekerjaan": "distributor"
    }
  ],
  "message": "Successfully Get Testimonial",
  "error": false
}
```

