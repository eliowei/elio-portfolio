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
        highlights: z.array(
          z.string()
        ),
        order: z.number(),
        year: z.string(),
        category: z.string(),
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

        showcase: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            features: z.array(z.string())
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
          z.object({
            title: z.string(),
            image: z.string()
          })
        ),
        layout: z.object({
          col: z.number(),

          aspect: z.enum([
            'video',
            'square'
          ]),

          order: z.object({
            content: z.number(),
            img: z.number()
          })
        }),
        card: z.object({
          title: z.string(),
          description: z.string()
        })
      })
    })

  }
})
