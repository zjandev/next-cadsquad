import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function cleanMarkdownString(markdown: string) {
    if (typeof markdown !== 'string') return ''

    // Remove backslashes not used for escaping Markdown (common from JSON string storage)
    return markdown
        .replace(/\\n/g, '\n') // Handle newlines properly
        .replace(/\\"/g, '"') // Replace escaped quotes
        .replace(/\\'/g, "'") // Replace escaped single quotes
        .replace(/\\\\/g, '\\') // Replace double backslashes with single backslash
}
