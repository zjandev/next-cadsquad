import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale

    // Dynamic import multiple namespace files
    const [metadataMessages, commonMessages] = await Promise.all([
        import(`../../public/messages/${locale}/common.json`),
        import(`../../public/messages/${locale}/metadata.json`),
    ])

    return {
        locale,
        messages: {
            // Validation namespace
            metadata: metadataMessages.default,

            // Common namespace (can be used as default)
            common: commonMessages.default,

            // Flatten common messages to root level for easy access
            ...commonMessages.default,
        },
        timeZone: 'Asia/Ho_Chi_Minh',
    }
})

export const getRequestConfigDynamic = getRequestConfig(
    async ({ requestLocale }) => {
        const requested = await requestLocale
        const locale = hasLocale(routing.locales, requested)
            ? requested
            : routing.defaultLocale

        // Define all possible namespaces
        const namespaces = ['metadata', 'common']

        // Dynamic import all namespace files
        const messageImports = await Promise.allSettled(
            namespaces.map(async (namespace) => {
                try {
                    const messages = await import(
                        `../../public/messages/${locale}/${namespace}.json`
                    )
                    return { namespace, messages: messages.default }
                } catch (error) {
                    console.warn(
                        `Failed to load ${namespace} messages for locale ${locale}:`,
                        error
                    )
                    return { namespace, messages: {} }
                }
            })
        )

        // Build messages object
        const messages = {}
        let commonMessages = {}

        messageImports.forEach((result) => {
            if (result.status === 'fulfilled') {
                const { namespace, messages: namespaceMessages } = result.value
                messages[namespace] = namespaceMessages

                // Store common messages separately to flatten to root
                if (namespace === 'common') {
                    commonMessages = namespaceMessages
                }
            }
        })

        return {
            locale,
            messages: {
                ...messages,
                // Flatten common messages to root level
                ...commonMessages,
            },
            timeZone: 'Asia/Ho_Chi_Minh',
        }
    }
)
