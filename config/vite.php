<?php

use craft\helpers\App;

return [
    'useDevServer'               => App::env('CRAFT_ENVIRONMENT') === 'dev',
    'manifestPath'               => '@webroot/dist/.vite/manifest.json',
    'devServerPublic'            => 'https://test-craftcms.ddev.site:3000/',
    'serverPublic'               => App::env('PRIMARY_SITE_URL') . '/dist/',
    'errorEntry'                 => '',
    'cacheKeySuffix'             => '',
    'devServerInternal'          => 'http://localhost:3000',
    'checkDevServer'             => true,
    'includeReactRefreshShim'    => false,
    'includeModulePreloadShim'   => true,
    'includeScriptOnloadHandler' => true,
];
