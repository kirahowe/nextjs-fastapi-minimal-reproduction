/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
          {
            source: "/api/test2",
            destination:
                process.env.NODE_ENV === "development"
                ? "http://localhost:8000/api/test2"
                : "/api/test2"}
        ]
      }
};

export default nextConfig;
