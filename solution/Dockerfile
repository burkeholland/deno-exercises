FROM hayd/alpine-deno:1.5.4

WORKDIR /app

ENV PORT=8000

COPY . .

CMD ["deno", "run", "-A", "--unstable", "app.ts"]

EXPOSE ${PORT}