'use client'
import { defineAbility, MongoAbility } from '@casl/ability';
import { createContextualCan } from '@casl/react';
import { createContext } from 'react';

const ability = defineAbility((can, cannot) => {
  can('read', 'all');
});




const abilityForUser =  (user: any) => defineAbility((can) => {
  can('read', 'Article');

  if (user.isLoggedIn) {
    can('update', 'Article', { authorId: user.id });
    can('create', 'Comment');
    can('update', 'Comment', { authorId: user.id });
  }
});

export const AbilityContext = createContext(ability);
export const Can = createContextualCan(AbilityContext.Consumer);

export default function AbilityContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
}




function updateAbility(ability: MongoAbility, user:any) {
  

  
    // const { rules } =defineAbility((can, cannot) => {
    //     if (user.role === 'admin') {
    //         can('manage', 'all');
    //       } else {
    //         can('read', 'all');
    //       }
    //   });
    // ability.update(rules);
  }
  