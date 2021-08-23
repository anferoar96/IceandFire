FROM node:12.22.1

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

# start app
CMD ng serve --host 0.0.0.0
EXPOSE 4200