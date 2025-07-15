FROM  node:18-alpine
RUN addgroup zanjan && adduser -S -G  zanjan music
USER music
WORKDIR /appMusic
COPY . .
EXPOSE  4200
CMD ["npm","start"]