/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ERXES_API_URL: "https://mta.app.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6Im10YSIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMTVUMDY6MDM6MDUuMDU4WiIsInVzZXJHcm91cElkIjoiNEVIeWRUREFpczJMZFFuWm4iLCJleHBpcmVEYXRlIjoiMjAyNC0xMS0xNFQxMDowMDozNy4zMjZaIiwibm9FeHBpcmUiOnRydWUsImFsbG93QWxsUGVybWlzc2lvbiI6dHJ1ZSwiX2lkIjoiUDNSYVFRX20wNWgyNzlkQlVrNlVyIiwiX192IjowfSwiaWF0IjoxNzI4OTg2NTAzfQ.5yvyzmgFe3YNV4uH5DZpd-wTpfwHNaDZoTpy6vuVWx4",
  },
  images: {
    domains: [
      "images-na.ssl-images-amazon.com",
      "utfs.io",
      "cdn.discordapp.com",
      "media.discordapp.net",
      "t4.ftcdn.net", // Added domain
    ],
  },
};

export default nextConfig;
