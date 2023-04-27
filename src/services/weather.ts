import { Axios } from 'axios'
import { openWeatherMapApiKey, openWeatherMapBaseUrl } from '@/constants/environment'
import type { OpenWeatherData, OpenWeatherResponse } from '@/share/types'

const api = new Axios({
  baseURL: openWeatherMapBaseUrl,
  params: {
    appid: openWeatherMapApiKey
  }
})

export const getWeatherData = async (lat: string, lng: string): Promise<OpenWeatherData> => {
  try {
    const weatherData = await api.get<OpenWeatherResponse>('onecall', {
      params: {
        lat,
        lon: lng,
        exclude: 'part',
        units: 'metric'
      }
    })

    const data: OpenWeatherResponse =
      typeof weatherData.data === 'string'
        ? JSON.parse(weatherData.data as string)
        : weatherData.data

    const localOffset = new Date().getTimezoneOffset() * 60000
    const utc = data.current.dt * 1000 + localOffset
    const currentTime = utc + 1000 * data.timezone_offset

    data.hourly = data.hourly?.map((hour) => {
      const utc = hour.dt * 1000 + localOffset
      hour.dt = utc + 1000 * data.timezone_offset
      return hour
    })

    return {
      ...data,
      currentTime
    }
  } catch (error) {
    console.error(error)
    return {} as OpenWeatherData
  }
}
