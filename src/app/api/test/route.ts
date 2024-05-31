export function GET(request: Request) {
  return new Response(`Hello from typescript! ${process.env.NODE_ENV}`);
}

