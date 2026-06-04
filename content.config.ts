import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
      schema: z.object({
        title: z.string(),

        slug: z.string(),

        description: z.string(),
        order: z.number(),
        cover: z.string(),

        tags: z.array(
          z.string()
        ),

        github: z.string().optional(),

        demo: z.string().optional(),

        overview: z.object({
          title: z.string(),
          content: z.string()
        }),

        responsibilities: z.object({
          frontend: z.array(z.string()),
          backend: z.array(z.string()),
          database: z.array(z.string())
        }),

        techStack: z.object({
          frontend: z.array(z.string()),
          backend: z.array(z.string()),
          database: z.array(z.string())
        }),

        roles: z.array(
          z.object({
            title: z.string(),
            description: z.string()
          })
        ),

        challenges: z.array(
          z.object({
            title: z.string(),

            subtitle: z.string(),

            problem: z.string(),

            solution: z.string(),

            technologies: z.array(
              z.string()
            )
          })
        ),

        gallery: z.array(
          z.string()
        )
      })
    })

  }
})
