export default interface ITwit {
  retweeted_status: IRetweetedStatus,
  user: IUser,
  text: string,
  extended_entities: IExtendedEntities,
  quoted_status?: ITwit
}

export interface IExtendedEntities {
  media: IMedia[]
}

export interface IMedia {
  type: string,
  video_info: IVideoInfo
  url: string
}

export interface IVideoInfo {
  variants: {
    url: string
  }[]
}

export interface IUser {
  name: string,
  profile_image_url_https: string,
  profile_banner_url: string,
  statuses_count: number,
  screen_name: string,
  verified: boolean
}

export interface IRetweetedStatus {
  user: IUser
}
