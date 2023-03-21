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
    
  });