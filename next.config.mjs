/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
          {
            source: "/api/test2",
            destination:
                process.env.NODE_ENV === "development"
                ? "http://127.0.0.1:8000/api/v2/competition/evaluate"
                : "/api/v2/competition/evaluate"          }
        ]
      }
};

export default nextConfig;
