import * as S from './styles'
import EditIcon from '@mui/icons-material/Edit'

interface IHeader {
  title: string
  image: string
}

export function Header(props: IHeader) {
  return (
    <S.Header>
      <div>
        <h1>{props.title}</h1>
        <button type="button">
          <EditIcon />
        </button>
      </div>

      <img src={props.image} alt="" />
    </S.Header>
  )
}
