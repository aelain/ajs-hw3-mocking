import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('Check userId', () => {
    fetchData.mockReturnValue({});
    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('Check status: ok', () => {
    fetchData.mockReturnValue({
        status: 'ok',
        level: 1,
    });
    expect(getLevel(1)).toBe('Ваш текущий уровень: 1');
});

test('Check status: error', () => {
    fetchData.mockReturnValue({
        status: 'error',
    });
    expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
