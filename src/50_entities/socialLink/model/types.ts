// export type SocialLinkId = 'flat' | 'house' | 'sauna'
export type SocialLinkId = string

export type SocialLink = {
  id: SocialLinkId,
  hidden?: true
  title: string,
  url: string,
  icon: string,
}
