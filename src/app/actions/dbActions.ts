'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function getName(idParam: string) {
  const payload = await getPayload({ config })

  try {
    const result = await payload.find({
      collection: 'guests', // required
      where: {
        slugParam: {
          equals: idParam,
        },
      },
    })
    console.log('result', result.docs[0]?.name)
    return result.docs[0]?.name || ''
  } catch (error) {
    throw new Error(`Error querying`)
  }
}

export async function getMaxGuests(idParam: string) {
  const payload = await getPayload({ config })

  try {
    const result = await payload.find({
      collection: 'guests', // required
      where: {
        slugParam: {
          equals: idParam,
        },
      },
    })
    console.log('result', result.docs[0]?.maxGuests)
    return result.docs[0]?.maxGuests || 0
  } catch (error) {
    throw new Error(`Error querying`)
  }
}

export async function getGuest(idParam: string) {
  const payload = await getPayload({ config })

  try {
    const result = await payload.find({
      collection: 'guests', // required
      where: {
        slugParam: {
          equals: idParam,
        },
      },
    })
    return result.docs[0] || null
  } catch (error) {
    throw new Error(`Error querying`)
  }
}

export async function updateRsvp(idParam: string, formData: FormData) {
  const payload = await getPayload({ config })

  if (formData.get('attending') === 'no') {
    formData.set('numOfRsvp', '0')
  }
  formData.set('done', 'yes')

  const data = Object.fromEntries(formData.entries())

  try {
    const result = await payload.update({
      collection: 'guests', // required
      where: {
        slugParam: {
          equals: idParam,
        },
      },
      data: data,
    })
    console.log('result', result)
    return result
  } catch (error) {
    throw new Error(`Error updating`)
  }
}
