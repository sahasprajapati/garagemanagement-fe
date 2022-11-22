import { camelCaseToTitleCase } from '@/lib/utils';
import Switch from '@/ui/Switch/Switch';
import { groupBy } from 'lodash';
import { useEffect, useState } from 'react';
interface PermissionCheckerProps {
  permissions: {
    id: number;
    action: string;
    subject: {
      id: number;
      name: string;
    };
  };
  selectedPermissions: number[],
  onTogglePermission: (id: number)=>void;
}
export default function PermissionChecker({
  permissions,
  selectedPermissions,
  onTogglePermission  
}: PermissionCheckerProps) {
  const [sorted, setSorted] = useState<any>({});

  useEffect(() => {
    const permissionGrouped = groupBy(permissions, 'subject.name');
    const s: any = {};
    Object.keys(permissionGrouped)
      .sort()
      .forEach((key) => (s[key] = permissionGrouped[key]));
    console.log('Sahas group', sorted);

    setSorted(s);
  }, [permissions]);

  return (
    <>
      {Object.keys(sorted).map((group) => {
        return (
          <>
            <h6>{camelCaseToTitleCase(group)}</h6>
            <div className="row">
              {sorted[group].map((permission: any, index: number) => {
                return (
                  <div className="col-3">
                    <Switch
                      label={camelCaseToTitleCase(permission?.action ?? '')}
                      checked={selectedPermissions.includes(permission?.id)}
                      onChecked={() => {
                        // permission,
                        onTogglePermission(+permission?.id);

                      }}
                    />

                    {/* <p>{camelCaseToTitleCase(permission?.action ?? '')}</p> */}
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
}
