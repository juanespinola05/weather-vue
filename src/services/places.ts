import type { MapBoxPlacesResponse } from '@/share/types'
import { Axios } from 'axios'
import { mapboxApiKey, mapboxBaseUrl } from '@/constants/environment'

const api = new Axios({
  baseURL: mapboxBaseUrl,
  params: {
    access_token: mapboxApiKey
  }
})

export const fetchPlaces = async (searchQuery: string): Promise<MapBoxPlacesResponse> => {
  const res = await api.get<MapBoxPlacesResponse>(`/${searchQuery}.json`, {
    params: {
      types: 'place'
    }
  })
  return typeof res.data === 'string' ? JSON.parse(res.data) : res
}
