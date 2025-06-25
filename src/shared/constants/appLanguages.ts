import UKFlag from '@/assets/images/flag/uk_flag.svg'
import VNFlag from '@/assets/images/flag/vietnam_flag.svg'

export const APP_LANGUAGES = [
    { label: 'Tiếng Việt', flag: VNFlag, locale: 'vi' },
    { label: 'English', flag: UKFlag, locale: 'en' },
]
export type AppLanguage = (typeof APP_LANGUAGES)[0]
