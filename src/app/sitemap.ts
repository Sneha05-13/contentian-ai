import type { MetadataRoute } from 'next'
import { aiTools } from '@/data/aiTools'
import { aiBasics } from '@/data/aiBasics'
import { guides } from '@/data/guides'
import { aiExperiences } from '@/data/aiExperiences'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://contentian-ai.vercel.app'
  
  const staticRoutes = [
    '',
    '/generator',
    '/ai-hub',
    '/ai-hub/basics',
    '/ai-hub/tools',
    '/ai-hub/guides',
    '/ai-hub/experiences',
    '/about',
    '/features',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const toolsRoutes = aiTools.map((tool) => ({
    url: `${baseUrl}/ai-hub/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const basicsRoutes = aiBasics.map((topic) => ({
    url: `${baseUrl}/ai-hub/basics/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const guidesRoutes = guides.map((guide) => ({
    url: `${baseUrl}/ai-hub/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const experiencesRoutes = aiExperiences.map((exp) => ({
    url: `${baseUrl}/ai-hub/experiences/${exp.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...toolsRoutes, ...basicsRoutes, ...guidesRoutes, ...experiencesRoutes]
}
