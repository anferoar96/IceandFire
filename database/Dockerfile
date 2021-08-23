FROM postgres
ENV POSTGRES_USER fan
ENV POSTGRES_PASSWORD fan1289
ENV POSTGRES_DB ruedata2
COPY characterDB.sql /docker-entrypoint-initdb.d/
EXPOSE 5432