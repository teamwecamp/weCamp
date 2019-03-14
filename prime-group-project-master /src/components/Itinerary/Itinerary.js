import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import Timeline from 'react-calendar-timeline';

const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

const items = [
    {
        id: 1,
        group: 1,
        title: 'item 1',
        start_time: moment(),
        end_time: moment().add(1, 'hour')
    },
    {
        id: 2,
        group: 2,
        title: 'item 2',
        start_time: moment().add(-0.5, 'hour'),
        end_time: moment().add(0.5, 'hour')
    },
    {
        id: 3,
        group: 1,
        title: 'item 3',
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(3, 'hour')
    }
]

class Itinerary extends Component {
    componentDidMount=()=> {
        this.setCampItinerary();
    }

    setCampItinerary(){
        const action = {type:'FETCH_CAMP_ITINERARY'}
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                Rendered by react!
                {JSON.stringify(this.props.itinerary)}
    <Timeline
                    groups={groups}
                    items={items}
                    defaultTimeStart={moment().add(-12, 'hour')}
                    defaultTimeEnd={moment().add(12, 'hour')}
                />
            </div>

        )
    }
}

const mapStateToProps = (reduxStore) => ({
    itinerary: reduxStore.setCampItinerary.setCampItinerary
});
export default connect(mapStateToProps)(Itinerary);