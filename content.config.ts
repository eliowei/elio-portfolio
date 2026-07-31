import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
      schema: z.object({

      // ==========================================================================
      // Basic Information
      // 基本資訊
      // ==========================================================================

      title: z.string(),
      updatedAt: z.string().optional(),
      slug: z.string(),
      type: z.enum([
        'project',
        'product'
      ]).default('project'),

      description: z.string(),
      highlights: z.array(z.string()),

      order: z.number(),
      year: z.number(),
      category: z.string(),
      cover: z.string(),
      tags: z.array(z.string()),

      github: z.string().optional(),
      demo: z.string().optional(),

      // ==========================================================================
      // Card Information
      // 卡片資訊
      // ==========================================================================

      card: z.object({
        title: z.string(),
        description: z.string()
      }),

      // ==========================================================================
      // Overview
      // 專案概述
      // ==========================================================================

      overview: z.object({
        title: z.string(),
        content: z.string()
      }),

      // ==========================================================================
      // Problem
      // 商業痛點（Product）
      // ==========================================================================

      problem: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string()
          })
        )
      }).optional(),

      // ==========================================================================
      // Implementation Benefits
      // 導入成效
      // ==========================================================================

      benefits: z.array(z.string()).optional(),

      // ==========================================================================
      // Feature Showcase
      // 功能展示
      // ==========================================================================

      showcase: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          features: z.array(z.string())
      })
      ),

      // ==========================================================================
      // Responsibilities
      // 負責內容
      // ==========================================================================

        responsibilities: z.record(
          z.string(),
          z.array(z.string()))
          .optional(),

      // ==========================================================================
      // Tech Stack
      // 技術架構
      // ==========================================================================

      techStack: z.record(
        z.string(),
        z.array(
        z.string())
        ).optional(),

      // ==========================================================================
      // Industries
      // 適用產業 / 擴充功能
      // ==========================================================================

      industries: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        items: z.array(
          z.string()
        )
      })).optional(),

      // ==========================================================================
      // Implementation
      // 導入流程
      // ==========================================================================

      implementation: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string()
      })
      ).optional(),

      // ==========================================================================
      // Engineering Challenges
      // 技術挑戰
      // ==========================================================================

      challenges: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        problem: z.string(),
        solution: z.string(),
        technologies: z.array(
          z.string()
        )
      })).optional(),

      // ==========================================================================
      // System Design
      // 系統設計
      // ==========================================================================

      systemDesign: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        technologies: z.array(z.string())
      })).optional(),

      // ==========================================================================
      // Product Information
      // 產品資訊
      // ==========================================================================

      product: z.object({

        pricing: z.object({

          title: z.string(),

          description: z.string().optional(),

          plans: z.array(
            z.object({

              name: z.string(),

              subtitle: z.string(),

              price: z.number().optional(),

              priceText: z.string().optional(),

              suffix: z.string().optional(),

              featured: z.boolean().optional(),

              button: z.object({
                text: z.string(),
                link: z.string()
              }),

              features: z.array(
                z.string()
              )

            })
          )

        }).optional(),

        faq: z.object({

          title: z.string().optional(),

          description: z.string().optional(),

          items: z.array(
            z.object({

              question: z.string(),

              answer: z.string()

            })
          )

        }).optional(),

        cta: z.object({

          title: z.string(),

          description: z.string().optional(),

          button: z.string(),

          link: z.string()

        }).optional()

      }).optional(),

      // ==========================================================================
      // Gallery
      // 圖片展示
      // ==========================================================================

      gallery: z.array(
        z.object({
          title: z.string(),
          image: z.string()
        })
      ),

      // ==========================================================================
      // Layout
      // 畫廊版型
      // ==========================================================================

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
      })

      })
    })

  }
})
