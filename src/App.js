import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;