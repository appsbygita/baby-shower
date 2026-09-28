'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { Message } from '@/utils/dataTypes'

export async function submitMessage(formData: FormData) {
  const payload = await getPayload({ config })
  console.log('formData', formData)
  const data = Object.fromEntries(formData.entries()) as Message
  console.log('data', data)
  try {
    const result = await payload.create({
      collection: 'messages', // required
      data: data,
    })
    console.log('result', result)
    return result
  } catch (error) {
    console.log('error', error)
    throw new Error(`Error creating message`)
  }
}

export async function getMessages() {
  const payload = await getPayload({ config })

  try {
    const result = await payload.find({
      collection: 'messages', // required
      limit: 100,
      sort: '-createdAt',
    })
    // console.log('result', result)
    return result.docs
  } catch (error) {
    throw new Error(`Error querying messages`)
  }
}
