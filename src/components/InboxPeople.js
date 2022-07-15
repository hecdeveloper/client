import React from 'react';
import { Searchbox } from './Searchbox';
import { Sidebar } from './Sidebar';
import Tabs from './tabs/TabsView';

export const InboxPeople = () => {
    return (
        <div className="inbox_people">

            <Searchbox />
            <Tabs/>
            <Sidebar />

        </div>
    )
}
