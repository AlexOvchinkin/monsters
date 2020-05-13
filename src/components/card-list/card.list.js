import React from 'react';
import { Card } from '../card/card';

import './card.list.css';

export const CardList = (props) => {
    return (
        <div className='row'>
            {
                props.users.map(user => {
                    return <Card key={user.id} user={user} />
                })
            }
        </div>
    );
}