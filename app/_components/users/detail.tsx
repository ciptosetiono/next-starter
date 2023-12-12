import React from 'react'
import {DetailViewWrapper, DetailViewRow} from '@/app/_components/ui/detail-view';
import UserStatus from './status';

import type { User } from '@/app/_lib/types/user';

export default function UserDetail({ user }: {user: User}) {
  return (
    <DetailViewWrapper>
      <DetailViewRow label='Name' value={user.name}/>
      <DetailViewRow label='Email' value={user.email}/>
      <DetailViewRow label='Status' value={<UserStatus status={user.status}/>}/>
    </DetailViewWrapper>
  )
}
