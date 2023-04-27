const environment = {
  mapboxBaseUrl: import.meta.env.VITE_MAPBOX_BASE_URL,
  mapboxApiKey: import.meta.env.VITE_MAPBOX_API_KEY,
  openWeatherMapBaseUrl: import.meta.env.VITE_OWP_BASE_URL,
  openWeatherMapApiKey: import.meta.env.VITE_OWP_API_KEY
}

export const { mapboxBaseUrl, mapboxApiKey, openWeatherMapBaseUrl, openWeatherMapApiKey } =
  environment
