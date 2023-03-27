import useDebounce from '@/hooks/useDebounce'
import { ISelect } from '@/types/Autocomplete'
import axios from 'axios'
import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { useQuery } from 'react-query'
import { Autocomplete } from '../Autocomplete'
import { HeaderContainerStyled } from './styles'

export function Header() {
  const [cities, setCities] = useState<ISelect[]>([])
  const [city, setCity] = useState<string>('')

  const debounceSearchCity = useDebounce(city, 500)

  const { data, isLoading, error } = useQuery({
    queryKey: ['city', debounceSearchCity],
    queryFn: async () => {
      const { data } = await axios.post<ISelect[]>('/api/climatempo', { city })
      setCities(data)
    },
  })

  if (error) {
    console.log('Erro na busca de cidade, chamar um toast')
  }

  function onSelectCity(value: string, name: string) {
    console.log('cidade', name, value)
  }

  return (
    <HeaderContainerStyled>
      <Autocomplete
        id="inputSearchCity"
        icon={<HiOutlineSearch />}
        placeholder="Informe a cidade"
        name="selectCity"
        onSelectItem={onSelectCity}
        onSearch={(newCity) => setCity(newCity)}
        items={cities}
        isLoading={isLoading}
      />
    </HeaderContainerStyled>
  )
}
