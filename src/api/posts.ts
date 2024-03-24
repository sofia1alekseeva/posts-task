
const API = "https://jsonplaceholder.typicode.com/";

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res;
  } else {
    return Promise.reject(
      `Ошибка получения данных. Статус ответа: ${res.status}`
    );
  }
};
const getPosts = (queryParams?: { _page?: number; _limit?: number }) => {
  let url = `${API}/posts`;
  if (queryParams) {
    url = `${url}?`;
    const queryParamsArr = Object.entries(queryParams);
    queryParamsArr.forEach(([key, value], index) => {
      url = `${url}${key}=${value}`;
      if (index !== queryParamsArr.length - 1) {
        url = `${url}&`;
      }
    });
  }
  return fetch(url).then(checkResponse);
};

export { getPosts };
