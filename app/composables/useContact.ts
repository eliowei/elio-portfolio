import emailjs from '@emailjs/browser'

export const useContact = () => {
  const sendMail = async (payload: {
    name: string,
    email: string,
    projectType: string,
    budget: string,
    message: string
  }) => {
    const config = useRuntimeConfig()

    const serviceId = String(config.public.emailServiceId)

    const templateId = String(config.public.emailTemplateId)

    const publicKey = String(config.public.emailPublicKey)

    return emailjs.send(
      serviceId,
      templateId,
      {
        from_name: payload.name,
        from_email: payload.email,
        project_type: payload.projectType,
        budget: payload.budget,
        message: payload.message,
        reply_to: payload.email
      },
      publicKey
    )
  }

  return {
    sendMail
  }


}