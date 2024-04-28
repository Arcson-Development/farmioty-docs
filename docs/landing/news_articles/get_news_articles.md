---
sidebar_position: 2
---

# Get News and Articles

For Landing Page

## Get News and Articles

Method : **[GET]**

Route :
**/v1/news-articles**


### CURL Example

```json
curl
--location 'localhost:8000/v1/news-articles'
```

## Response

### Success Response

```json
{
  "status": 200,
  "data": [
    {
      "news_id": 1,
      "title": "Hardest Plant To Grow",
      "content": "Several hardest plant to grow",
      "author": "oliver skyes",
      "news_images": [
        "news_images_z9ttykwhv3a_28_4.jpeg",
        "news_images_akhq8ipkeyk_28_4.jpg"
      ]
    },
    {
      "news_id": 2,
      "title": "Hardest Plant To Grow",
      "content": "A few hardest plant to grow",
      "author": "oliver skies",
      "news_images": [
        "news_images_1vzonghvvwm_28_4.jpeg",
        "news_images_asxvc6nq2fc_28_4.jpg"
      ]
    },
    {
      "news_id": 4,
      "title": "Easiest Plant To Grow",
      "content": "Several easiest plant to grow",
      "author": "oliver skyes",
      "news_images": ["news_images_2auiq2ldskf_28_4.jpeg"]
    }
  ],
  "message": "Successfully Get News & Articles",
  "error": false
}
```

