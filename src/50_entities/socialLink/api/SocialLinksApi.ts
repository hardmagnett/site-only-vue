import allSocialLinksRaw from '@/70_content/socialLink'

class SocialLinksApi {
  getAllActiveSocialLinks = () => {
    const allActiveSocialLinks = allSocialLinksRaw
      .filter((link) => !link.hidden)
      .map((link) => {
        return {
          ...link,
          icon: `/images/icons/${link.icon}`,
        }
      })
    return allActiveSocialLinks
  }
}

export { SocialLinksApi }
