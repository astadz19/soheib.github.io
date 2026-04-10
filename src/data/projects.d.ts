export type ProjectTech = {
  name: string
  note?: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  logoUrl: string
  thumbnailUrl: string
  description?: string
  liveUrl?: string
  whatIBuilt?: string
  tags?: string[]
  technologies?: ProjectTech[]
}

export const projects: Project[]

