import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'gustavo_hideki_portifolio',

  projectId: '0tw8ojzd',
  dataset: 'production',

  plugins: [deskTool({}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
