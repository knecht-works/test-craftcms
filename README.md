<div align="center">

  <img src="https://knecht.works/styleguide/favicon/favicon.svg" alt="Knecht" width="112" height="112">

# test-craftcms

<p>
  <img src="https://img.shields.io/badge/Craft%20CMS-5-e5422b?logo=craftcms&logoColor=white" alt="Craft CMS 5">
  <img src="https://img.shields.io/badge/PHP-8.4-777BB4?logo=php&logoColor=white" alt="PHP 8.4">
  <img src="https://img.shields.io/badge/DDEV-nginx--fpm-02A8E2?logo=docker&logoColor=white" alt="DDEV · nginx-fpm">
  <img src="https://img.shields.io/badge/Knecht-e2e%20fixture-b7f8a2?labelColor=09090b" alt="Knecht e2e fixture">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License">
</p>

</div>

A [DDEV](https://ddev.com)-based Craft CMS 5 project used as an end-to-end test fixture for [Knecht](https://knecht.works). It's a multi-site setup (`en` primary, `de`, `gb`) with front-end assets built via [Vite](https://vitejs.dev) and [Tailwind CSS](https://tailwindcss.com), so Knecht can boot the environment, hit each site, and exercise plugin/CP behavior against real content.

## Setup

Requires [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) and a Docker provider (Docker, OrbStack, or Colima).

```bash
ddev start                      # boot the containers
ddev composer install           # install PHP dependencies
cp .env.example .env            # then fill in CRAFT_APP_ID / CRAFT_SECURITY_KEY
ddev craft install              # create the database and admin user
ddev npm install
ddev npm run dev                # start the Vite dev server, or `npm run build`
```

## URLs

`ddev launch` opens the primary site in your browser.

| Role             | URL                                     |
| ---------------- | --------------------------------------- |
| EN               | `https://en.craftcms.ddev.site`         |
| DE               | `https://de.craftcms.ddev.site`         |
| Control panel    | `https://cp.craftcms.ddev.site/admin`   |