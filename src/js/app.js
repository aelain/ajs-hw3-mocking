import fetchData from './http';

export default function getLevel(userId) {
    const response = fetchData(`https://server/user/${userId}`);

    // TODO: логика обработки
    if (response.status === 'ok') {
        return `Ваш текущий уровень: ${response.level}`; // не покрыто тестами
    }

    return 'Информация об уровне временно недоступна';
}
