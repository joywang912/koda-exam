import React from 'react';
import avatar from '../../assets/images/team1.jpg';
import PersonCard from './PersonCard';
import './team.scss';

const team = [
    {
        id: 1,
        name: 'Mike Smith',
        position: 'partner',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet qui voluptatum aperiam! Libero quidem, vero nemo magni labore, dolorum optio facilis illum tempore sapiente quis rerum. Cupiditate, veritatis magnam!',
        avatar,
    }, {
        id: 2,
        name: 'Mike Smith',
        position: 'partner',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet qui voluptatum aperiam! Libero quidem, vero nemo magni labore, dolorum optio facilis illum tempore sapiente quis rerum. Cupiditate, veritatis magnam!',
        avatar,
    }, {
        id: 3,
        name: 'Mike Smith',
        position: 'partner',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet qui voluptatum aperiam! Libero quidem, vero nemo magni labore, dolorum optio facilis illum tempore sapiente quis rerum. Cupiditate, veritatis magnam!',
        avatar,
    }, {
        id: 4,
        name: 'Mike Smith',
        position: 'partner',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet qui voluptatum aperiam! Libero quidem, vero nemo magni labore, dolorum optio facilis illum tempore sapiente quis rerum. Cupiditate, veritatis magnam!',
        avatar,
    }
];
const Team = () => {
    return <div className="team">
        {
            team.map(person => {
                return <PersonCard key={person.id} person={person} />;
            })
        }

    </div>;
};

export default Team;