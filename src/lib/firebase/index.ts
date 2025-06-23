import { getApps, initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

import firebaseConfig from '@/config/firebaseConfig'

export const app = !getApps().length
    ? initializeApp(firebaseConfig)
    : getApps()[0]
export const database = getDatabase(app)
