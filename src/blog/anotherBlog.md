---
title: "Pandas and Bananas"
date: "2017-08-21"
slug: "/blog/second-blog"
---

Do Pandas eat bananas? Check out this short video that shows that yes! pandas do
seem to really enjoy bananas!

Let's add some code here:

<!-- ```javascript
var s = "JavaScript syntax highlighting";
alert(s);
``` -->

and here:

```javascript{1-2,22}
// In your gatsby-config.js
// Let's make this line very long so that our container has to scroll its overflow…
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 756,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```