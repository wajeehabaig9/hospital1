'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { product } from '@/sanity/schemaTypes' // Ensure this path is correct

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: [product], // Register the Product Schema
  },
  plugins: [
    deskTool(), // Enables the main content editor
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
