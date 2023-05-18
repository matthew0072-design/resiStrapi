
const CLOUDINARY = "https://console.cloudinary.com/console/c-d42cb2e04d10ce13d513267b17be7b/media_library/folders/c414acdde20959038170efebea06ac2ad1"

module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  
  {
    'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', CLOUDINARY],
          'media-src': ["'self'", 'data:', 'blob:', CLOUDINARY],
          upgradeInsecureRequests: null,
        },
      },
    },
  }


];
