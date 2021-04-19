import { localUrl, localBaseUrl } from './Repository';

class UserRepository {
  async loginInfo(data) {
    const reponse = await localUrl
      .post(`${localBaseUrl}/api/login`, data)
        .then((response) => {
          if (response.data) {
            return { items: response.data };
          } else {
            return null;
          }
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          return null;
        });
    return reponse;
  }

  async registerInfo(data) {
    const reponse = await localUrl
      .post(`${localBaseUrl}/api/register`, data)
        .then((response) => {
          if (response.data) {
            return { items: response.data };
          } else {
            return null;
          }
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          return null;
        });
    return reponse;
  }
}

export default new UserRepository()
