From: https://docs.google.com/document/d/1V6GeCdalMqwBBXr7BLerze_8-fm9K-U2OvmIcY5pl8Y/edit?pli=1
### WP Engine (WPE) and LocalWP
To clear the Acorn caches on WP Engine after pushing via LocalWP: Access the local site SSH via LocalWP link and use this command:
`wp acorn clear`

### Existing Sage Theme
We have included a sample Sage theme for a holding/splash page. If you want to, you are welcome to use it as a starting point. If not, please feel free to delete it and use your own stack. This Sage theme setup includes:
- Sage: [Sage Docs](https://roots.io/sage/docs/deployment/)
- TailwindCSS + Forms + Typography: [TailwindCSS Docs](https://tailwindcss.com/docs/utility-first)
- Acorn: [Acorn Docs](https://roots.io/acorn/docs/)
- Extended CPTs: [Extended CPTs GitHub](https://github.com/johnbillion/extended-cpts)
- ACF Composer: [ACF Composer GitHub](https://github.com/Log1x/acf-composer)
- Wiki for ACF Builder: [ACF Builder Wiki](https://github.com/StoutLogic/acf-builder/wiki/field-types)
- Navi: [Navi GitHub](https://github.com/Log1x/navi)
- Sage Directives: [Sage Directives Docs](https://log1x.github.io/sage-directives-docs)
- Sage SVG: [Sage SVG GitHub](https://github.com/Log1x/sage-svg)

**Not included (since it's just a tiny demo) but recommended to add:**
- Alpine JS: [Alpine JS](https://alpinejs.dev/start-here)
- SwiperJS: [SwiperJS](https://swiperjs.com/swiper-api)

To use Sage or any theme:
You’ll need WSL along with your choice of Linux OS.

### Existing Plugins
Please use these if you need these functions. If not, you are free to remove, but please clear alternatives with me first.

- Accessibility by UserWay - ADA button is a “button” tag and has this ID: “accessibilityWidget”
- ACF Content Analysis for Yoast SEO
- Advanced Custom Fields PRO - may need to re-auth this on your local domain
- License Key: `b3JkZXJfaWQ9MTY5OTAzfHR5cGU9ZGV2ZWxvcGVyfGRhdGU9MjAxOS0wOS0xMCAxNDoxMjo1NA==`
- AltText.ai - generates alt text for all images on upload based on provided keywords
- CookieYes - cookie approval/GDPR preferred plugin
- Disable Blog - remove this if it doesn’t have a blog section
- GA Google Analytics - leave inactive for launch setup
- WP SVG Images - extend WP for SVG images
- Yoast SEO - all SEO settings, meta titles, and descriptions provided

### Images
Clear the existing image library, its there for demo only
Modify the WP Big Image threshold to 4K (4096px)
Add the following base image sizes
```
add_image_size('4K', 4096, 4096);
add_image_size('2K', 2560, 2560);
add_image_size('FHD', 1920, 1920);
add_image_size('HD', 1280, 1280);
add_image_size('SD', 896, 896);
add_image_size('XS', 640, 640);
```

Wherever possible, for image areas that allow non-svgs or generally admin provided images (ex not explicitly defined by the theme) use the full srcset values (ex via `wp_get_attachment_image()`)

### Advanced Custom Fields (ACF)
- Use ACF for all complex content.
- Unless its a simple content page (Ex blog) hide the WP content area and use ACF only
- Use vertical tabbed setup for fields
	- 1 tab per section/panel (split topically for site options, split based on design for page/post specific options). Recommend using 1 ACF Group per tab with the same name.
You can set up fields in the admin screens directly originally if you use your own setup, but please export to PHP and include directly in the theme (hide ACF dropdown) (if you use sage + ACF composer this won’t apply as all fields will be included directly in the theme)
- Ensure that field names and structures are clear and “idiot proof” as this will be directly in client hands to manage
- For Properties - use the ACF Flexible layout builder to generate sections as needed.

### General WP/Theme
These are the responsive breakpoints we use (copied from tailwindcss config in sage theme provided). You can tweak if needed for the design, but here is a starting point:
- base/xs: 0-640px
- sm: 640-768px
- md: 768-1024px
- lg: 1024-1280px
- xl: 1280-1366px
- 2xl: 1366-1536px
- 3xl: 1536-1850px
- FHD: 1850-2555px
- 2K: 2555-3835px
- 4K: 3835+px
- Portrait: (orientation: portrait)
- Landscape: (orientation: landscape)
- mdx (medium landscape): (orientation: landscape) and (min-width: 768px) and (max-width: 1023px)

- [ ] Include relevant DashIcons with each post type, don’t just default to the same icon
- [ ] Only include post type features that are actively used (ex featured image, page attributes).
- [ ] Disable tags on blog posts
- [ ] Move WP toolbar to bottom of screen on front end
- [ ] Set up colors, fonts, etc as variables (CSS or bootstrap/SASS/SCSS or Tailwind config classes)
- [ ] Pure JS over jQuery unless absolutely necessary
- [ ] Account for empty options/settings/fields (ex if subheader field is empty, it should be fully removed on the front end and collapse gracefully)

Take a look at the admin menu structure on the demo and use that as a baseline. 
In general -
- Options above post types
- Separate “Navigation” menu item for menus
- Unlike the demo, if you don’t use the sage theme as a starting point, you don’t need to otherwise modify the themes & plugins menus. The client is taking this site over directly, so leaving the defaults there is fine.
- Please use unique page templates that match the designs (rather than a builder for all the pages).
- No visual builder/block editor/customizer screens please. Just classic WP. The sage theme blocks that already, but if you don’t use that you can use a “classic wp + widgets” plugin or include the functionality in your theme as needed.
