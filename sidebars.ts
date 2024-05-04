import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  landingApi: [
    {
      type: "category",
      label: "Testimonial",
      items: [
        "landing/testimonial/create_testimonials",
        "landing/testimonial/get_testimonials",
        "landing/testimonial/update_testimonials",
        "landing/testimonial/delete_testimonials",
      ],
    },
    {
      type: "category",
      label: "News And Articles",
      items: [
        "landing/news_articles/create_news_articles",
        "landing/news_articles/get_news_articles",
        "landing/news_articles/get_single_news_articles",
        "landing/news_articles/update_news_articles",
        "landing/news_articles/delete_news_articles",
      ],
    },
    {
      type: "category",
      label: "Contact Us",
      items: [
        "landing/contact_us/create_contact_us",
        "landing/contact_us/get_contact_us",
      ],
    },
    {
      type: "category",
      label: "Socials",
      items: ["landing/socials/get_single_socials"],
    },
  ],

  mobileApi: [
    {
      type: "category",
      label: "Hama",
      items: [
        "home_petani/hama/post_hama",
        "home_petani/hama/get_hama",
        "home_petani/hama/get_single_hama",
        "home_petani/hama/delete_hama",
      ],
    },
    {
      type: "category",
      label: "Coupon",
      items: [
        "home_petani/coupon/generate_coupon",
        "home_petani/coupon/get_all_coupon",
        "home_petani/coupon/get_single_coupon",
        "home_petani/coupon/coupon_status_to_active",
        "home_petani/coupon/coupon_status_to_expired",
        "home_petani/coupon/update_coupon",
        "home_petani/coupon/delete_coupon",
      ],
    },
  ],
};

export default sidebars;
