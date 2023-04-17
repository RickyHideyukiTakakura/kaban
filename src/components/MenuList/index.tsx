import * as S from './styles';

interface IMenuList {
  icon: React.ReactNode;
  title: string;
}

export function MenuList(props: IMenuList) {
  return (
    <S.MenuList>
      <a>
        {props.icon}
        <span>{props.title}</span>
      </a>
    </S.MenuList>
  );
}
