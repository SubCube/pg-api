-- Создание таблицы с постами (Название, Описание, Картинка)

create Table post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    image VARCHAR(255)
);
