import { createClient } from '@supabase/supabase-js'
import { env } from '../helpers/env'

export const supabase = createClient(env('SUPABASE_URL'), env('SUPABASE_KEY'))
