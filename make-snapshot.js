import { setTimeout } from 'timers/promises'
import fs from 'fs'

import XChainApi from './XChainApi.js'

import path from 'path'
const __dirname = path.resolve()

const xChainApi = XChainApi.create()

/**
 * @returns {string[]}
 */
const getAssetsFromEnvFile = () => {
  try {
    const assets = fs.readFileSync(path.join(__dirname, 'assets.env'), 'utf8')
    return assets.split('\n').filter(Boolean)
  } catch (error) {
    console.error(error)
  }
}

const saveXChainHoldersToCsv = async () => {
  let csvContent = ''

  const tokens = getAssetsFromEnvFile()

  for (let token of tokens) {
    console.info(`Saving holders for ${token}`)
    try {
      const holders = await xChainApi.getAssetHolders(token)
      for (let holder of holders) {
        csvContent += `\r\n${token},${holder.address},${holder.quantity},${holder.percentage}`
      }
    } catch (error) {
      console.error(error)
    } finally {
      await setTimeout(1000)
    }
  }

  const fileName = 'x-chain-holders.csv'
  const currentTime = new Date().toISOString().replace(/:/g, '-')
  const filePath = path.join(__dirname, 'snapshots', `${currentTime}_${fileName}`)

  fs.writeFile(filePath, csvContent, (error) => {
    if (error) {
      console.error(error)
    }
  })
}

saveXChainHoldersToCsv()