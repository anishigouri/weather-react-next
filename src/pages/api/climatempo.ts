import { api } from '@/lib/axios'
import { ICity } from '@/types/City'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { city } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!city) {
    return res.status(200).json([])
  }

  try {
    const { data } = await api.get<ICity[]>(`/locale/city?name=${city}`)

    const list = data.map((item: ICity) => ({
      key: String(item.id),
      value: item.name,
    }))

    return res.status(201).json(list)
  } catch (e) {
    console.error(e)
    return res.status(500).json('Error')
  }
}
