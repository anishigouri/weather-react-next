import { ISelect } from '@/types/Autocomplete'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { Loading } from '../Loading'
import {
  AutocompleteContainerStyled,
  AutocompleteIconStyled,
  AutocompleteListStyled,
} from './styles'

type AutocompleteProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label?: string
  icon?: ReactNode
  onSearch: (value: string) => void
  onSelectItem: (value: string, name: string) => void
  name: string
  items: ISelect[] | null
  isLoading?: boolean
}

export function Autocomplete({
  label,
  id,
  icon,
  onSelectItem,
  onSearch,
  name,
  items,
  isLoading,
  ...rest
}: AutocompleteProps) {
  const [show, setShow] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')

  function onSelect(key: string, value: string, description: string) {
    onSelectItem(key, value)
    setShow(false)
    setSelected(description)
  }

  function onChange(value: string) {
    onSearch(value)
    setSelected(value)
  }

  return (
    <AutocompleteContainerStyled>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        {...rest}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        value={selected}
        onFocus={() => setShow(true)}
      ></input>
      {isLoading && (
        <AutocompleteIconStyled>
          <Loading size={25} />
        </AutocompleteIconStyled>
      )}
      {icon && !isLoading && (
        <AutocompleteIconStyled>{icon}</AutocompleteIconStyled>
      )}
      <AutocompleteListStyled show={show}>
        {items &&
          items.map((item) => (
            <li
              onClick={() => onSelect(item.key, name, item.value)}
              key={item.key}
            >
              {item.value}
            </li>
          ))}
      </AutocompleteListStyled>
    </AutocompleteContainerStyled>
  )
}
