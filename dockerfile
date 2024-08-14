FROM node:21.5.0

WORKDIR /app

COPY interface /app/interface

RUN cd /app/interface && npm install

CMD ["npm", "run", "dev"]