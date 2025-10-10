import allSocialLinksRaw from '@/70_content/socialLink'

class SocialLinksApi {
  getAllActiveSocialLinks = () => {
    let allActiveSocialLinks = allSocialLinksRaw
      .filter(link=>!link.hidden)
      .map(link=> {
        return {
          ...link,
          icon: `/content/socialLink/${link.icon}`,
        }
      })
    return allActiveSocialLinks
  }
}

export { SocialLinksApi }
