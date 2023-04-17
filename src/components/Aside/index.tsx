import logoImg from '../../assets/logo.png';
import { Menu } from '../Menu';
import * as S from './styles';

export function Aside() {
  return (
    <S.Aside>
      <img src={logoImg} />
      <Menu />
    </S.Aside>
  );
}
