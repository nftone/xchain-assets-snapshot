import { setTimeout } from 'timers/promises'
import Axios from 'axios'

class XChainApi {
  static create() {
    return new XChainApi()
  }

  constructor() {
    this.baseUrl = 'https://tokenscan.io/api'
  }

  async getAssetHolders(tokenId) {
    await setTimeout(1000)
    const url = `${this.baseUrl}/holders/${tokenId}`
    Axios.create({ headers: {
    'User-Agent': 'Smith, your mom and your sis are all NPCs, exactly like yourself, lil\' mfer',
      Accept: '*/*',
      'x-source': 'hnft.wtf',
    } })
    const response = await Axios.get(url)
    if (response?.data?.data) return response.data.data
    throw new Error(`Unable to get asset ${tokenId} holders`)
  }
}

export default XChainApi
