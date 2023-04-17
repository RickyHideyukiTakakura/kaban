import { MenuList } from '../MenuList';
import * as S from './styles';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';

export function Menu() {
  return (
    <S.Menu>
      <MenuList icon={<StayCurrentPortraitIcon />} title="Boards" />
      <MenuList icon={<PeopleIcon />} title="Equipes" />
      <MenuList icon={<DescriptionIcon />} title="Relatórios" />
      <MenuList icon={<SettingsIcon />} title="Ajustes" />
    </S.Menu>
  );
}
