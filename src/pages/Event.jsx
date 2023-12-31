import React, { memo, useEffect } from 'react';
import { EventItemContainer } from '../styled/EventStyles';
import useEventStore from '../store/event-store';
import { Link } from 'react-router-dom';

const Event = memo(() => {
    const { eventData } = useEventStore(state => state);
    const { fetchData } = useEventStore(state => state);
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <EventItemContainer>
            <div className='inner'>
                <h3>EVENT</h3>
                <ul>
                    {
                        eventData.map(item => {
                            const { id, imageUrl, link } = item;
                            return (
                                <li key={id}>
                                    <a href="#">
                                        <Link to={link}><img src={imageUrl} alt="" /></Link>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </EventItemContainer>
    );
});

export default Event;