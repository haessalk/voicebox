import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// `npm run dev`에서도 api/ 폴더의 서버리스 함수를 그대로 호출해볼 수 있도록
// Vercel의 (req, res) 방식 핸들러를 최소한으로 흉내내는 개발용 미들웨어.
function apiDevMiddleware() {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/generate-draft', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            req.body = body ? JSON.parse(body) : {};
          } catch {
            req.body = {};
          }
          const { default: handler } = await import('./api/generate-draft.js');
          const shim = {
            statusCode: 200,
            status(code) {
              this.statusCode = code;
              return this;
            },
            json(payload) {
              res.statusCode = this.statusCode;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(payload));
            },
          };
          try {
            await handler(req, shim);
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal error' }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // GEMINI_API_KEY는 VITE_ 접두사가 없어 클라이언트로는 노출되지 않는다.
  // 이 서버(Node) 프로세스 안에서만 참조해 개발용 /api 미들웨어가 쓸 수 있게 한다.
  if (env.GEMINI_API_KEY) process.env.GEMINI_API_KEY = env.GEMINI_API_KEY;

  return {
    plugins: [react(), apiDevMiddleware()],
  };
});
