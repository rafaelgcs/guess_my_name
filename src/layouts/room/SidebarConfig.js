import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import financeIcon from '@iconify/icons-mdi/finance';
// import lockFill from '@iconify/icons-eva/lock-fill';
// import personAddFill from '@iconify/icons-eva/person-add-fill';
// import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Usuario 1',
    points: 0,
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Usuário 2',
    points: 0,
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Usuário 3',
    points: 5,
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Usuário 4',
    points: 0,
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Usuário 5',
    points: 0,
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  }
];

export default sidebarConfig;
