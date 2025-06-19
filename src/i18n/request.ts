import { hasLocale } from 'next-intl'
import { getRequestConfig, getTimeZone } from 'next-intl/server'

import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale

    try {
        // Dynamic import multiple namespace files with error handling
        const [commonResult, metadataResult, landingResult] =
            await Promise.allSettled([
                import(`../../public/messages/${locale}/common.json`),
                import(`../../public/messages/${locale}/metadata.json`),
                import(`../../public/messages/${locale}/landing.json`),
            ])

        // Extract messages safely
        const commonMessages =
            commonResult.status === 'fulfilled'
                ? commonResult.value.default
                : {}

        const metadataMessages =
            metadataResult.status === 'fulfilled'
                ? metadataResult.value.default
                : {}

        const landingMessages =
            landingResult.status === 'fulfilled'
                ? landingResult.value.default
                : {}

        return {
            locale,
            messages: {
                landing: landingMessages,
                metadata: metadataMessages,
                common: commonMessages,

                // Flatten common messages to root level for easy access
                ...commonMessages,
            },
            timeZone: 'Asia/Ho_Chi_Minh',
        }
    } catch (error) {
        console.error(`Failed to load messages for locale ${locale}:`, error)

        // Fallback với messages rỗng
        return {
            locale,
            messages: {
                landing: {},
                metadata: {},
                common: {},
            },
            timeZone: await getTimeZone(),
        }
    }
})

export const getRequestConfigDynamic = getRequestConfig(
    async ({ requestLocale }) => {
        const requested = await requestLocale
        const locale = hasLocale(routing.locales, requested)
            ? requested
            : routing.defaultLocale

        // Define all possible namespaces
        const namespaces = ['common', 'metadata', 'landing'] // Đổi thứ tự

        try {
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
            const messages: Record<string, string> = {}
            let commonMessages = {}

            messageImports.forEach((result) => {
                if (result.status === 'fulfilled') {
                    const { namespace, messages: namespaceMessages } =
                        result.value
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
        } catch (error) {
            console.error(
                `Failed to load dynamic messages for locale ${locale}:`,
                error
            )

            return {
                locale,
                messages: {
                    common: {},
                    metadata: {},
                },
                timeZone: 'Asia/Ho_Chi_Minh',
            }
        }
    }
)
