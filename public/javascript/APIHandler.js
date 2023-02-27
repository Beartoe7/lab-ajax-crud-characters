
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const res = await axios.get(this.BASE_URL + "/characters")
    return res.data
  }

  async getOneRegister (id) {
    const res = await axios.get(this.BASE_URL + "/characters/" + id)
    return res.data
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
