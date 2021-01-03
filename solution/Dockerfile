FROM hayd/alpine-deno

WORKDIR /app

ENV PORT=8000

COPY . .

CMD ["deno", "run", "-A", "--unstable", "app.ts"]

EXPOSE ${PORT}
