FROM mcr.microsoft.com/vscode/devcontainers/base:debian-10

ENV DENO_INSTALL=/deno
ENV PORT=8000

RUN mkdir -p /deno \
    && curl -fsSL https://deno.land/x/install/install.sh | sh \
    && chown -R vscode /deno

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno

WORKDIR /app

COPY deps.ts .
RUN deno cache --unstable deps.ts

COPY . .
RUN deno cache --unstable app.ts

EXPOSE ${PORT}

CMD ["deno", "run", "--unstable", "-A", "app.ts"]