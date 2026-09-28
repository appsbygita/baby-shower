import type { CollectionConfig } from 'payload'

export const Guests: CollectionConfig = {
  slug: 'guests',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'done',
      type: 'radio',
      options: ['yes', 'no'],
      required: true,
    },
    {
      name: 'attending',
      type: 'radio',
      options: ['yes', 'no'],
    },
    {
      name: 'maxGuests',
      type: 'number',
      required: true,
    },
    {
      name: 'numOfRsvp',
      type: 'number',
    },
    {
      name: 'dietaryRestrictions',
      type: 'text',
    },
    {
      name: 'slugParam',
      type: 'text',
    },
  ],
}
