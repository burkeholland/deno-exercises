FROM hayd/alpine-deno:1.6.0

WORKDIR /app

ENV PORT=8000

COPY . .

CMD ["deno", "run", "-A", "--unstable", "app.ts"]

EXPOSE ${PORT}