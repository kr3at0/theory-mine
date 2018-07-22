import createApiSpec from '~/apiSpecs'
import { Entry } from './entry.model'

createApiSpec(
  Entry,
  'entry',
  {title: 'data bases', type: 'definition'}
)