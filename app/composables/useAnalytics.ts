type ProjectAnalytics = {
  id: string,
  title: string
}

type ContactSource = | 'navbar' | 'home' | 'product_page' | 'footer'

export const useAnalytics = () => {
  const { proxy } = useScriptGoogleTagManager()

  const push = (
    event: string,
    params: Record<string, unknown> = {}
  ) => {
    if (import.meta.client) {
      proxy.dataLayer?.push({
        event,
        ...params
      })
    }
  }

  const sendProjectEvent = (event: string, project: ProjectAnalytics) => {
    push(event, {
      project_id: project.id,
      project_name: project.title
    })
  }

  const sendContactEvent = (event: string, source: ContactSource, params: Record<string, unknown> = {}) => {
    push(event, {
      source,
      ...params
    })
  }

  const trackProjectView = (project: ProjectAnalytics) => sendProjectEvent('project_view', project)
  const trackProjectDemoClick = (project: ProjectAnalytics) => sendProjectEvent('project_demo_click', project)
  const trackProjectGithubClick = (project: ProjectAnalytics) => sendProjectEvent('project_github_click', project)

  const trackSocialClick = (platform: string) => {
    push('social_click', {
      platform
    })
  }

  const trackContactClick = (source: ContactSource) => sendContactEvent('contact_click', source)
  const trackContactSubmit = (projectType: string, budget: string) => {
    push('contact_submit', {
      project_type: projectType,
      budget
    })
  }

  return { trackProjectView, trackProjectDemoClick, trackProjectGithubClick, trackContactClick, trackContactSubmit, trackSocialClick }
}