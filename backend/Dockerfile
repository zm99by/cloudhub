# Выбор базового образа
FROM alpine:latest

# Установка ttyd
RUN apk add --no-cache ttyd

# Открытие порта, используемого ttyd (по умолчанию 7681)
EXPOSE 7681

# Запуск ttyd с shell по умолчанию при старте контейнера
ENTRYPOINT ["ttyd"]

# По умолчанию ttyd будет запускать ash - alpine shell
CMD ["ash"]