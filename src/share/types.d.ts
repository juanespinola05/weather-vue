export interface MapBoxPlacesResponse {
  type: string
  query?: string[] | null
  features?: FeaturesEntity[] | null
}
export interface FeaturesEntity {
  id: string
  type: string
  place_type?: string[] | null
  relevance: number
  properties: Properties
  text: string
  place_name: string
  bbox?: number[] | null
  center?: number[] | null
  geometry: Geometry
  context?: ContextEntity[] | null
}
export interface Properties {
  wikidata?: string | null
  mapbox_id: string
}
export interface Geometry {
  type: string
  coordinates?: number[] | null
}
export interface ContextEntity {
  id: string
  wikidata: string
  mapbox_id: string
  text: string
  short_code?: string | null
}

export interface OpenWeatherResponse {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: Current
  minutely?: MinutelyEntity[] | null
  hourly?: HourlyEntity[] | null
  daily?: DailyEntity[] | null
}

export type OpenWeatherData = OpenWeatherResponse & { currentTime: number }

export interface Current {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather?: WeatherEntity[] | null
}
export interface WeatherEntity {
  id: number
  main: string
  description: string
  icon: string
}
export interface MinutelyEntity {
  dt: number
  precipitation: number
}
export interface HourlyEntity {
  dt: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather?: WeatherEntity[] | null
  pop: number
}
export interface DailyEntity {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: Temp
  feels_like: FeelsLike
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather?: WeatherEntity[] | null
  clouds: number
  pop: number
  uvi: number
  rain?: number | null
}
export interface Temp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}
export interface FeelsLike {
  day: number
  night: number
  eve: number
  morn: number
}

export interface Location {
  id: string
  state: string
  city: string
  coords: {
    lat: string
    lng: string
  }
}

export interface OpenWeatherCurrentResponse {
  coord: Coord
  weather?: WeatherEntity[] | null
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
export interface Coord {
  lon: number
  lat: number
}
export interface WeatherEntity {
  id: number
  main: string
  description: string
  icon: string
}
export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}
export interface Wind {
  speed: number
  deg: number
  gust: number
}
export interface Clouds {
  all: number
}
export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
