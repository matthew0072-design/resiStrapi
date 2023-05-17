module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_F92vek9uGclsERqsYKZrjppP26iL/8cUj9nZXxv",
        apiToken: "BQ4ohC39UXU6IMvMnBHZzJsg",
        appFilter: "resi-strapi",
        //teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },

    "cloudinary-content": {
      
      apiKey: env('CLOUDINARY_KEY'),
      token: env('CLOUDINARY_SECRET'),
      baseUrl:env('CLOUDINARY_BASE_URL', 'https://cloudinary.com')
    },


upload: {
  config: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    }
  }
}




  });