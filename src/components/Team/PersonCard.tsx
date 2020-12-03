import React from 'react';

interface Props {
    person: {
        id: number;
        name: string;
        position: string;
        description: string;
        avatar: string;
    };
}
const PersonCard = (props: Props) => {
    const { person } = props;

    return <div className="team-card">
        <a href="#" className="team-card__more-link">
            <i className="fas fa-angle-right"></i> read more
        </a>
        <a href="#" className="team-card__avatar-link">
            <img src={person.avatar} alt={person.name} />
        </a>
        <div
            className="row no-gutters align-items-center team-card__title"
        >
            <div className="col">
                <h3 className="font-slab">{person.name}</h3>
            </div>

            <div className="col text-right">
                <a href='#'><i className="team-card__icon team-card__icon--feacebook" /></a>
                <a href='#'><i className="team-card__icon team-card__icon--twitter" /></a>
                <a href='#'><i className="team-card__icon team-card__icon--email" /></a>
            </div>
        </div>

        <div className="team-card__position">{person.position}</div>

        <div className="team-card__description text-muted">
            {person.description}
        </div>


    </div>;
};

export default PersonCard;