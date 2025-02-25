import {documentTypes} from './document'
import {globalTypes} from './global'
import {objectTypes} from './object'

export const schemaTypes = [...documentTypes, ...globalTypes, ...objectTypes]
