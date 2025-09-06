export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/447305556219?text=${encodeURIComponent(message)}`
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{5})(\d{3})(\d{3})/, '$1 $2 $3')
}