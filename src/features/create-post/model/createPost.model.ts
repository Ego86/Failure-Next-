import axios from "axios";

type TypeData = { title?: string; text?: string };

class CreatePostModule {
  private server = axios;
  private url = "http://localhost:3000";

  async getAll() {
    return await this.server.get(this.url);
  }

  async postImgs(imgs: FormData) {
    return await this.server.post(this.url + "/post/imgs", imgs, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  async post(data: TypeData) {
    return await this.server.post(this.url + "/post", data, {
      headers: {
        // "Content-Type": "multiplpart/form-data",
        "Content-Type": "application/json",
      },
    });
  }
  async update(updData: TypeData, id: number) {
    return await this.server.put(this.url + `/post/${id}`, updData);
  }
  async delete(id: number) {
    return await this.server.delete(this.url + `/post/${id}`);
  }
}

export default new CreatePostModule();
