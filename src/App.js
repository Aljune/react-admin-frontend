import React, {useEffect} from "react";
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';

import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
export const App = () => {
  useEffect(() => {
    fetch('http://127.0.0.1:8000/test')
        .then(res => res.json())
        .then(json => console.log('jay', json));
  }, [1]);
    return (
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} icon={UserIcon} />
   </Admin>
    );
};
export default App;