import * as S from './styles';

import { ReactNode } from 'react';

interface IKaban {
  children: ReactNode;
}

export function Kaban(props: IKaban) {
  return <S.Kaban>{props.children}</S.Kaban>;
}

export const KabanHeader = S.KabanHeader;
export const KabanBody = S.KabanBody;
