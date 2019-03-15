import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import Timeline from 'react-calendar-timeline';

// const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

// const items = [
//     {
//         id: 1,
//         group: 1,
//         title: 'item 1',
//         start_time: moment(),
//         end_time: moment().add(1, 'hour')
//     },
//     {
//         id: 2,
//         group: 2,
//         title: 'item 2',
//         start_time: moment().add(-0.5, 'hour'),
//         end_time: moment().add(0.5, 'hour')
//     },
//     {
//         id: 3,
//         group: 1,
//         title: 'item 3',
//         start_time: moment().add(2, 'hour'),
//         end_time: moment().add(3, 'hour')
//     }
// ]

class Itinerary extends Component {
    componentDidMount = () => {
        this.setCampItinerary();
    }

    setCampItinerary() {
        const action = { type: 'FETCH_CAMP_ITINERARY' }
        this.props.dispatch(action);
    }

    render() {
        console.log(this.props.itinerary);
        let items = this.props.itinerary.itineraries;
        let groups = this.props.itinerary.children;
        return (
            <div>
                <h1>Itinerary</h1>
                {JSON.stringify(this.props.itinerary)}
                {this.props.itinerary.itineraries !== undefined &&
                    <Timeline
                        groups={groups}
                        items={items}
                    defaultTimeStart="1556723865000"
                    defaultTimeEnd="1567351065000"
                    />}
            </div>

        )
    }
}

const mapStateToProps = (reduxStore) => ({
    itinerary: reduxStore.setCampItinerary.setCampItinerary
});
export default connect(mapStateToProps)(Itinerary);