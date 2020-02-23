FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=.sweetpwd.

COPY ./employees.sql /docker-entrypoint-initdb.d/
COPY ./*.dump /docker-entrypoint-initdb.d/

RUN echo "default-authentication-plugin=mysql_native_password" >> /etc/mysql/my.cnf