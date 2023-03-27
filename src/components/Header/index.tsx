import { debounce } from 'lodash'
import { ISelect } from '@/types/Autocomplete'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { HiOutlineSearch } from 'react-icons/hi'
import { useMutation, useQuery } from 'react-query'
import { Autocomplete } from '../Autocomplete'
import { HeaderContainerStyled } from './styles'

export function Header() {
  const [cities, setCities] = useState<ISelect[]>([])

  const { mutate, isLoading } = useMutation({
    mutationFn: async (value: string) => {
      if (value) {
        const { data } = await axios.post<ISelect[]>('/api/climatempo', {
          city: value,
        })
        setCities(data)
      } else {
        setCities([])
      }
    },
    onError: () => {
      toast.error(
        'Erro: Não foi possível listar as cidades, tente novamente mais tarde',
      )
    },
  })

  const delayedSearch = debounce((value: string) => {
    mutate(value)
  }, 500)

  function onSelectCity(value: string, name: string) {
    console.log('cidade', name, value)
  }

  function onChangeCity(value: string) {
    delayedSearch(value)
  }

  return (
    <HeaderContainerStyled>
      <Autocomplete
        id="inputSearchCity"
        icon={<HiOutlineSearch />}
        placeholder="Informe a cidade"
        name="selectCity"
        onSelectItem={onSelectCity}
        onSearch={(newCity) => onChangeCity(newCity)}
        items={cities}
        isLoading={isLoading}
      />
    </HeaderContainerStyled>
  )
}
